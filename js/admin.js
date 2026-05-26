import { supabase } from './supabase.js';
import { renderAuth, renderConfirmEmail, renderAdminApp } from './ui.js';

const appEl = document.getElementById('app');

async function start() {
  try {
    const { data: { session } } = await supabase.auth.getSession();

    if (session?.user) {
      showAdmin(session.user);
    } else {
      showAuth();
    }

    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        showAdmin(session.user);
      } else if (event === 'SIGNED_OUT') {
        showAuth();
      }
    });
  } catch (err) {
    appEl.innerHTML = `<div class="auth-card"><p class="error">${err.message}</p></div>`;
  }
}

function showAdmin(user) {
  renderAdminApp(appEl, user, async () => {
    await supabase.auth.signOut();
  });
}

function showAuth() {
  renderAuth(appEl, async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }, async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data;
  });
}

start();
