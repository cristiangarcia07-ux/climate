import { supabase, onSessionChange, getSession } from './supabase.js';
import { renderAuth, renderConfirmEmail, renderAdminApp } from './ui.js';

const appEl = document.getElementById('app');
let rendered = false;

async function init() {
  const session = await getSession();
  if (session?.user) {
    rendered = true;
    renderAdminApp(appEl, session.user, handleLogout);
  } else {
    renderAuth(appEl, handleLogin, handleSignup);
  }

  onSessionChange((user) => {
    if (user) {
      rendered = true;
      renderAdminApp(appEl, user, handleLogout);
    } else {
      rendered = false;
      renderAuth(appEl, handleLogin, handleSignup);
    }
  });
}

init();

async function handleLogin(email, password) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
}

async function handleSignup(email, password) {
  const data = await supabase.auth.signUp({ email, password });
  if (data.error) throw data.error;
  return data;
}

async function handleLogout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
