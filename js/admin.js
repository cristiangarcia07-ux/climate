import { signUp, signIn, signOut, onAuthStateChanged } from './supabase.js';
import { renderAuth, renderConfirmEmail, renderAdminApp } from './ui.js';

const appEl = document.getElementById('app');

onAuthStateChanged((user) => {
  if (user) {
    if (!user.email_confirmed_at) {
      renderConfirmEmail(appEl, user.email);
    } else {
      renderAdminApp(appEl, user, handleLogout);
    }
  } else {
    renderAuth(appEl, handleLogin, handleSignup);
  }
});

async function handleLogin(email, password) {
  await signIn(email, password);
}

async function handleSignup(email, password) {
  const data = await signUp(email, password);
  if (!data.session) {
    renderConfirmEmail(appEl, email);
  }
}

async function handleLogout() {
  await signOut();
}
