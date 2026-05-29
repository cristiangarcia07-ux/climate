import { supabase } from './supabase.js?v=8';
import { renderAuth, renderConfirmEmail, renderNewPasswordForm } from './ui.js?v=8';
import {
  renderAdminLayout, renderCountriesSection,
  renderStatesSection, renderCitiesSection,
  renderApiLinksSection, renderUsersSection
} from './admin-ui.js?v=8';

const appEl = document.getElementById('app');
let currentUser = null;

async function start() {
  try {
    const { data: { session } } = await supabase.auth.getSession();

    if (session?.user) {
      currentUser = session.user;
      showAdmin();
    } else {
      showAuth();
    }

    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        currentUser = session.user;
        showAdmin();
      } else if (event === 'SIGNED_OUT') {
        currentUser = null;
        showAuth();
      } else if (event === 'PASSWORD_RECOVERY') {
        showNewPassword();
      }
    });
  } catch (err) {
    appEl.innerHTML = `<div class="auth-card"><p class="error">${err.message}</p></div>`;
  }
}

function showAuth() {
  renderAuth(appEl, async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }, async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data;
  }, async (email) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + window.location.pathname,
    });
    if (error) throw error;
  });
}

function showNewPassword() {
  renderNewPasswordForm(appEl, async (password) => {
    const { error } = await supabase.auth.updateUser({ password });
    if (error) throw error;
    appEl.innerHTML = `<div class="auth-card"><h2>Password updated</h2><p>Your password has been changed.</p><a href="admin.html" class="back-link">Sign in</a></div>`;
  });
}

async function checkAdmin() {
  const { data, error } = await supabase
    .from('usuario_panel_control')
    .select('privilegio_id, aprobado')
    .eq('user_id', currentUser.id)
    .single();

  if (error || !data) return false;
  return data.privilegio_id === 1 && data.aprobado === true;
}

async function showAdmin() {
  const isAdmin = await checkAdmin();
  if (!isAdmin) {
    appEl.innerHTML = `
      <div class="auth-card">
        <h2>Access Denied</h2>
        <p>You don't have admin privileges.</p>
        <a href="index.html" class="back-link">&larr; Back to weather</a>
        <button id="btn-logout" class="btn" style="margin-top:1rem">Sign out</button>
      </div>
    `;
    document.getElementById('btn-logout')?.addEventListener('click', () => supabase.auth.signOut());
    return;
  }

  let activeTab = 'countries';
  renderAdminLayout(appEl, currentUser, () => supabase.auth.signOut(), activeTab, switchTab);
  switchTab(activeTab);
}

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));

  switch (tab) {
    case 'countries': renderCountriesSection(countryHandlers); break;
    case 'states': renderStatesSection(stateHandlers); break;
    case 'cities': renderCitiesSection(cityHandlers); break;
    case 'apilinks': renderApiLinksSection(apiLinkHandlers); break;
    case 'users': renderUsersSection(userHandlers); break;
  }
}

let activeTab = 'countries';

// --- Country handlers ---
const countryHandlers = {
  fetch: () => supabase.from('pais').select('*').order('id').then(r => { if (r.error) throw r.error; return r.data; }),
  onAdd: (data) => supabase.from('pais').insert(data).then(r => { if (r.error) throw r.error; }),
  onEdit: (id, data) => supabase.from('pais').update(data).eq('id', id).then(r => { if (r.error) throw r.error; }),
  onDelete: (id) => supabase.from('pais').delete().eq('id', id).then(r => { if (r.error) throw r.error; })
};

// --- State handlers ---
const stateHandlers = {
  fetch: async () => {
    const [states, countries] = await Promise.all([
      supabase.from('estado_Com_autonom').select('*').order('id').then(r => { if (r.error) throw r.error; return r.data; }),
      supabase.from('pais').select('id, nombre').order('id').then(r => { if (r.error) throw r.error; return r.data; })
    ]);
    return { states, countries };
  },
  getCountries: () => supabase.from('pais').select('id, nombre').order('id').then(r => { if (r.error) throw r.error; return r.data; }),
  onAdd: (data) => supabase.from('estado_Com_autonom').insert(data).then(r => { if (r.error) throw r.error; }),
  onEdit: (id, data) => supabase.from('estado_Com_autonom').update(data).eq('id', id).then(r => { if (r.error) throw r.error; }),
  onDelete: (id) => supabase.from('estado_Com_autonom').delete().eq('id', id).then(r => { if (r.error) throw r.error; })
};

// --- City handlers ---
const cityHandlers = {
  fetch: async () => {
    const [cities, estados, countries] = await Promise.all([
      supabase.from('ciudad').select('*').order('id').then(r => { if (r.error) throw r.error; return r.data; }),
      supabase.from('estado_Com_autonom').select('*').order('id').then(r => { if (r.error) throw r.error; return r.data; }),
      supabase.from('pais').select('id, nombre').order('id').then(r => { if (r.error) throw r.error; return r.data; })
    ]);
    return { cities, estados, countries };
  },
  getEstados: () => supabase.from('estado_Com_autonom').select('*').order('id').then(r => { if (r.error) throw r.error; return r.data; }),
  onAdd: (data) => supabase.from('ciudad').insert(data).then(r => { if (r.error) throw r.error; }),
  onEdit: (id, data) => supabase.from('ciudad').update(data).eq('id', id).then(r => { if (r.error) throw r.error; }),
  onDelete: (id) => supabase.from('ciudad').delete().eq('id', id).then(r => { if (r.error) throw r.error; })
};

// --- API Link handlers ---
const apiLinkHandlers = {
  fetch: async () => {
    const [apilinks, countries] = await Promise.all([
      supabase.from('api_links').select('*').order('id').then(r => { if (r.error) throw r.error; return r.data; }),
      supabase.from('pais').select('id, nombre').order('id').then(r => { if (r.error) throw r.error; return r.data; })
    ]);
    return { apilinks, countries };
  },
  getCountries: () => supabase.from('pais').select('id, nombre').order('id').then(r => { if (r.error) throw r.error; return r.data; }),
  onAdd: (data) => supabase.from('api_links').insert(data).then(r => { if (r.error) throw r.error; }),
  onEdit: (id, data) => supabase.from('api_links').update(data).eq('id', id).then(r => { if (r.error) throw r.error; }),
  onDelete: (id) => supabase.from('api_links').delete().eq('id', id).then(r => { if (r.error) throw r.error; })
};

// --- User handlers ---
const userHandlers = {
  fetch: async () => {
    const [users, privilegios] = await Promise.all([
      supabase.from('usuario_panel_control').select('*').order('email').then(r => { if (r.error) throw r.error; return r.data; }),
      supabase.from('privilegio').select('*').order('id').then(r => { if (r.error) throw r.error; return r.data; })
    ]);
    return { users, privilegios };
  },
  onChangeRole: (userId, privilegioId) =>
    supabase.from('usuario_panel_control').update({ privilegio_id: privilegioId }).eq('user_id', userId).then(r => { if (r.error) throw r.error; }),
  onApprove: (userId) =>
    supabase.from('usuario_panel_control').update({ aprobado: true }).eq('user_id', userId).then(r => { if (r.error) throw r.error; })
};

start();
