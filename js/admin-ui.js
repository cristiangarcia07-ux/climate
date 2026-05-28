export function renderAdminLayout(container, user, onLogout, activeTab, onTabChange) {
  container.innerHTML = `
    <div class="admin-layout">
      <header>
        <h1>Climate Panel</h1>
        <div class="header-right">
          <span class="user-email">${user.email}</span>
          <button id="btn-logout" class="btn">Logout</button>
        </div>
      </header>
      <nav class="admin-nav">
        <button class="tab-btn ${activeTab === 'countries' ? 'active' : ''}" data-tab="countries">Countries</button>
        <button class="tab-btn ${activeTab === 'states' ? 'active' : ''}" data-tab="states">States</button>
        <button class="tab-btn ${activeTab === 'cities' ? 'active' : ''}" data-tab="cities">Cities</button>
        <button class="tab-btn ${activeTab === 'apilinks' ? 'active' : ''}" data-tab="apilinks">API Keys</button>
        <button class="tab-btn ${activeTab === 'users' ? 'active' : ''}" data-tab="users">Users</button>
      </nav>
      <main class="admin-content" id="admin-content"></main>
    </div>
  `;

  document.getElementById('btn-logout').addEventListener('click', onLogout);
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => onTabChange(btn.dataset.tab));
  });
}

export function renderCountriesSection(handlers) {
  const el = document.getElementById('admin-content');
  el.innerHTML = `
    <div class="section-header">
      <h2>Countries</h2>
      <button id="btn-add-country" class="btn btn-primary">+ Add Country</button>
    </div>
    <div id="country-form-area"></div>
    <table class="admin-table">
      <thead><tr><th>ID</th><th>Name</th><th>Flag URL</th><th>Actions</th></tr></thead>
      <tbody id="country-tbody"></tbody>
    </table>
  `;

  document.getElementById('btn-add-country').addEventListener('click', () => {
    showCountryForm(null, handlers);
  });

  loadCountryList(handlers);
}

async function loadCountryList(handlers) {
  const tbody = document.getElementById('country-tbody');
  tbody.innerHTML = '<tr><td colspan="4">Loading...</td></tr>';
  try {
    const countries = await handlers.fetch();
    tbody.innerHTML = countries.map(c => `
      <tr>
        <td>${c.id}</td>
        <td>${c.nombre}</td>
        <td><img src="${c.url_bandera}" class="flag-icon" alt="${c.nombre}" onerror="this.style.display='none'"></td>
        <td class="actions">
          <button class="btn btn-sm btn-edit" data-id="${c.id}">Edit</button>
          <button class="btn btn-sm btn-delete" data-id="${c.id}">Delete</button>
        </td>
      </tr>
    `).join('');
    tbody.querySelectorAll('.btn-edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const country = countries.find(c => c.id === id);
        showCountryForm(country, handlers);
      });
    });
    tbody.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Delete this country?')) return;
        await handlers.onDelete(parseInt(btn.dataset.id));
        loadCountryList(handlers);
      });
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="4">Error: ${err.message}</td></tr>`;
  }
}

function showCountryForm(country, handlers) {
  const area = document.getElementById('country-form-area');
  const isEdit = country !== null;
  area.innerHTML = `
    <div class="inline-form">
      <h3>${isEdit ? 'Edit Country' : 'Add Country'}</h3>
      <input type="text" id="f-country-name" placeholder="Name" value="${isEdit ? country.nombre : ''}" required>
      <input type="text" id="f-country-flag" placeholder="Flag URL" value="${isEdit ? country.url_bandera : ''}">
      <div class="form-buttons">
        <button id="btn-country-save" class="btn btn-primary">Save</button>
        <button id="btn-country-cancel" class="btn">Cancel</button>
      </div>
      <p id="country-form-error" class="error hidden"></p>
    </div>
  `;
  document.getElementById('btn-country-save').addEventListener('click', async () => {
    const nombre = document.getElementById('f-country-name').value.trim();
    const url_bandera = document.getElementById('f-country-flag').value.trim();
    if (!nombre) return;
    try {
      if (isEdit) {
        await handlers.onEdit(country.id, { nombre, url_bandera });
      } else {
        await handlers.onAdd({ nombre, url_bandera });
      }
      area.innerHTML = '';
      loadCountryList(handlers);
    } catch (err) {
      const errEl = document.getElementById('country-form-error');
      errEl.textContent = err.message;
      errEl.classList.remove('hidden');
    }
  });
  document.getElementById('btn-country-cancel').addEventListener('click', () => {
    area.innerHTML = '';
  });
}

export function renderStatesSection(handlers) {
  const el = document.getElementById('admin-content');
  el.innerHTML = `
    <div class="section-header">
      <h2>States / Regions</h2>
      <button id="btn-add-state" class="btn btn-primary">+ Add State</button>
    </div>
    <div id="state-form-area"></div>
    <table class="admin-table">
      <thead><tr><th>ID</th><th>Name</th><th>Country</th><th>Actions</th></tr></thead>
      <tbody id="state-tbody"></tbody>
    </table>
  `;

  document.getElementById('btn-add-state').addEventListener('click', () => {
    showStateForm(null, handlers);
  });

  loadStateList(handlers);
}

async function loadStateList(handlers) {
  const tbody = document.getElementById('state-tbody');
  tbody.innerHTML = '<tr><td colspan="4">Loading...</td></tr>';
  try {
    const { states, countries } = await handlers.fetch();
    const countryMap = Object.fromEntries(countries.map(c => [c.id, c.nombre]));
    tbody.innerHTML = states.map(s => `
      <tr>
        <td>${s.id}</td>
        <td>${s.nombre}</td>
        <td>${countryMap[s.id_pais] || s.id_pais}</td>
        <td class="actions">
          <button class="btn btn-sm btn-edit" data-id="${s.id}">Edit</button>
          <button class="btn btn-sm btn-delete" data-id="${s.id}">Delete</button>
        </td>
      </tr>
    `).join('');
    tbody.querySelectorAll('.btn-edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const state = states.find(s => s.id === id);
        showStateForm(state, handlers);
      });
    });
    tbody.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Delete this state?')) return;
        await handlers.onDelete(parseInt(btn.dataset.id));
        loadStateList(handlers);
      });
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="4">Error: ${err.message}</td></tr>`;
  }
}

function showStateForm(state, handlers) {
  const area = document.getElementById('state-form-area');
  const isEdit = state !== null;
  Promise.resolve(handlers.getCountries()).then(countries => {
    area.innerHTML = `
      <div class="inline-form">
        <h3>${isEdit ? 'Edit State' : 'Add State'}</h3>
        <input type="text" id="f-state-name" placeholder="Name" value="${isEdit ? state.nombre : ''}" required>
        <select id="f-state-country">
          ${countries.map(c => `<option value="${c.id}" ${isEdit && c.id === state.id_pais ? 'selected' : ''}>${c.nombre}</option>`).join('')}
        </select>
        <div class="form-buttons">
          <button id="btn-state-save" class="btn btn-primary">Save</button>
          <button id="btn-state-cancel" class="btn">Cancel</button>
        </div>
        <p id="state-form-error" class="error hidden"></p>
      </div>
    `;
    document.getElementById('btn-state-save').addEventListener('click', async () => {
      const nombre = document.getElementById('f-state-name').value.trim();
      const id_pais = parseInt(document.getElementById('f-state-country').value);
      if (!nombre) return;
      try {
        if (isEdit) {
          await handlers.onEdit(state.id, { nombre, id_pais });
        } else {
          await handlers.onAdd({ nombre, id_pais });
        }
        area.innerHTML = '';
        loadStateList(handlers);
      } catch (err) {
        document.getElementById('state-form-error').textContent = err.message;
        document.getElementById('state-form-error').classList.remove('hidden');
      }
    });
    document.getElementById('btn-state-cancel').addEventListener('click', () => area.innerHTML = '');
  });
}

export function renderCitiesSection(handlers) {
  const el = document.getElementById('admin-content');
  el.innerHTML = `
    <div class="section-header">
      <h2>Cities</h2>
      <button id="btn-add-city" class="btn btn-primary">+ Add City</button>
    </div>
    <div id="city-form-area"></div>
    <table class="admin-table">
      <thead><tr><th>ID</th><th>Name</th><th>Flag URL</th><th>State</th><th>Country</th><th>Actions</th></tr></thead>
      <tbody id="city-tbody"></tbody>
    </table>
  `;

  document.getElementById('btn-add-city').addEventListener('click', () => {
    showCityForm(null, handlers);
  });

  loadCityList(handlers);
}

async function loadCityList(handlers) {
  const tbody = document.getElementById('city-tbody');
  tbody.innerHTML = '<tr><td colspan="6">Loading...</td></tr>';
  try {
    const { cities, estados, countries } = await handlers.fetch();
    const countryMap = Object.fromEntries(countries.map(c => [c.id, c.nombre]));
    const estadoMap = Object.fromEntries(estados.map(e => [e.id, { nombre: e.nombre, id_pais: e.id_pais }]));
    tbody.innerHTML = cities.map(c => {
      const est = estadoMap[c.id_estado] || {};
      return `
        <tr>
          <td>${c.id}</td>
          <td>${c.nombreciudad}</td>
          <td>${c.url_bandera ? `<img src="${c.url_bandera}" class="flag-icon" alt="${c.nombreciudad}" onerror="this.style.display='none'">` : '-'}</td>
          <td>${est.nombre || c.id_estado}</td>
          <td>${countryMap[est.id_pais] || '-'}</td>
          <td class="actions">
            <button class="btn btn-sm btn-edit" data-id="${c.id}">Edit</button>
            <button class="btn btn-sm btn-delete" data-id="${c.id}">Delete</button>
          </td>
        </tr>
      `;
    }).join('');
    tbody.querySelectorAll('.btn-edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const city = cities.find(c => c.id === id);
        showCityForm(city, handlers);
      });
    });
    tbody.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Delete this city?')) return;
        await handlers.onDelete(parseInt(btn.dataset.id));
        loadCityList(handlers);
      });
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="6">Error: ${err.message}</td></tr>`;
  }
}

function showCityForm(city, handlers) {
  const area = document.getElementById('city-form-area');
  const isEdit = city !== null;
  Promise.resolve(handlers.getEstados()).then(estados => {
    area.innerHTML = `
      <div class="inline-form">
        <h3>${isEdit ? 'Edit City' : 'Add City'}</h3>
        <input type="text" id="f-city-name" placeholder="City name" value="${isEdit ? city.nombreciudad : ''}" required>
        <input type="text" id="f-city-flag" placeholder="Flag URL (optional)" value="${isEdit ? (city.url_bandera || '') : ''}">
        <select id="f-city-estado">
          ${estados.map(e => `<option value="${e.id}" ${isEdit && e.id === city.id_estado ? 'selected' : ''}>${e.nombre}</option>`).join('')}
        </select>
        <div class="form-buttons">
          <button id="btn-city-save" class="btn btn-primary">Save</button>
          <button id="btn-city-cancel" class="btn">Cancel</button>
        </div>
        <p id="city-form-error" class="error hidden"></p>
      </div>
    `;
    document.getElementById('btn-city-save').addEventListener('click', async () => {
      const nombreciudad = document.getElementById('f-city-name').value.trim();
      const url_bandera = document.getElementById('f-city-flag').value.trim() || null;
      const id_estado = parseInt(document.getElementById('f-city-estado').value);
      if (!nombreciudad) return;
      try {
        if (isEdit) {
          await handlers.onEdit(city.id, { nombreciudad, url_bandera, id_estado });
        } else {
          await handlers.onAdd({ nombreciudad, url_bandera, id_estado });
        }
        area.innerHTML = '';
        loadCityList(handlers);
      } catch (err) {
        document.getElementById('city-form-error').textContent = err.message;
        document.getElementById('city-form-error').classList.remove('hidden');
      }
    });
    document.getElementById('btn-city-cancel').addEventListener('click', () => area.innerHTML = '');
  });
}

export function renderApiLinksSection(handlers) {
  const el = document.getElementById('admin-content');
  el.innerHTML = `
    <div class="section-header">
      <h2>API Keys</h2>
      <button id="btn-add-apilink" class="btn btn-primary">+ Add API Link</button>
    </div>
    <div id="apilink-form-area"></div>
    <table class="admin-table">
      <thead><tr><th>ID</th><th>URL</th><th>Country</th><th>Actions</th></tr></thead>
      <tbody id="apilink-tbody"></tbody>
    </table>
  `;

  document.getElementById('btn-add-apilink').addEventListener('click', () => {
    showApiLinkForm(null, handlers);
  });

  loadApiLinkList(handlers);
}

async function loadApiLinkList(handlers) {
  const tbody = document.getElementById('apilink-tbody');
  tbody.innerHTML = '<tr><td colspan="4">Loading...</td></tr>';
  try {
    const { apilinks, countries } = await handlers.fetch();
    const countryMap = Object.fromEntries(countries.map(c => [c.id, c.nombre]));
    tbody.innerHTML = apilinks.map(a => `
      <tr>
        <td>${a.id}</td>
        <td class="url-cell">${a.url}</td>
        <td>${countryMap[a.id_pais] || a.id_pais}</td>
        <td class="actions">
          <button class="btn btn-sm btn-edit" data-id="${a.id}">Edit</button>
          <button class="btn btn-sm btn-delete" data-id="${a.id}">Delete</button>
        </td>
      </tr>
    `).join('');
    tbody.querySelectorAll('.btn-edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const apilink = apilinks.find(a => a.id === id);
        showApiLinkForm(apilink, handlers);
      });
    });
    tbody.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Delete this API link?')) return;
        await handlers.onDelete(parseInt(btn.dataset.id));
        loadApiLinkList(handlers);
      });
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="4">Error: ${err.message}</td></tr>`;
  }
}

function showApiLinkForm(apilink, handlers) {
  const area = document.getElementById('apilink-form-area');
  const isEdit = apilink !== null;
  Promise.resolve(handlers.getCountries()).then(countries => {
    area.innerHTML = `
      <div class="inline-form">
        <h3>${isEdit ? 'Edit API Link' : 'Add API Link'}</h3>
        <input type="text" id="f-apilink-url" placeholder="URL (use {lat}, {lng} as placeholders)" value="${isEdit ? apilink.url : ''}" required>
        <select id="f-apilink-country">
          ${countries.map(c => `<option value="${c.id}" ${isEdit && c.id === apilink.id_pais ? 'selected' : ''}>${c.nombre}</option>`).join('')}
        </select>
        <div class="form-buttons">
          <button id="btn-apilink-save" class="btn btn-primary">Save</button>
          <button id="btn-apilink-cancel" class="btn">Cancel</button>
        </div>
        <p id="apilink-form-error" class="error hidden"></p>
      </div>
    `;
    document.getElementById('btn-apilink-save').addEventListener('click', async () => {
      const url = document.getElementById('f-apilink-url').value.trim();
      const id_pais = parseInt(document.getElementById('f-apilink-country').value);
      if (!url) return;
      try {
        if (isEdit) {
          await handlers.onEdit(apilink.id, { url, id_pais });
        } else {
          await handlers.onAdd({ url, id_pais });
        }
        area.innerHTML = '';
        loadApiLinkList(handlers);
      } catch (err) {
        document.getElementById('apilink-form-error').textContent = err.message;
        document.getElementById('apilink-form-error').classList.remove('hidden');
      }
    });
    document.getElementById('btn-apilink-cancel').addEventListener('click', () => area.innerHTML = '');
  });
}

export function renderUsersSection(handlers) {
  const el = document.getElementById('admin-content');
  el.innerHTML = `
    <div class="section-header">
      <h2>Users</h2>
    </div>
    <table class="admin-table">
      <thead><tr><th>User ID</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody id="user-tbody"></tbody>
    </table>
  `;
  loadUserList(handlers);
}

async function loadUserList(handlers) {
  const tbody = document.getElementById('user-tbody');
  tbody.innerHTML = '<tr><td colspan="5">Loading...</td></tr>';
  try {
    const { users, privilegios } = await handlers.fetch();
    const roleMap = Object.fromEntries(privilegios.map(p => [p.id, p.nombre]));
    tbody.innerHTML = users.map(u => `
      <tr class="${u.aprobado ? '' : 'row-pending'}">
        <td>${u.user_id.substring(0, 8)}...</td>
        <td>${u.email}</td>
        <td>${roleMap[u.privilegio_id] || u.privilegio_id}</td>
        <td>${u.aprobado ? '<span class="badge-approved">Approved</span>' : '<span class="badge-pending">Pending</span>'}</td>
        <td class="actions">
          ${!u.aprobado ? `<button class="btn btn-sm btn-approve" data-user="${u.user_id}">Approve</button>` : ''}
          <select class="role-select" data-user="${u.user_id}">
            ${privilegios.map(p => `<option value="${p.id}" ${p.id === u.privilegio_id ? 'selected' : ''}>${p.nombre}</option>`).join('')}
          </select>
          <button class="btn btn-sm btn-edit btn-change-role" data-user="${u.user_id}">Update</button>
        </td>
      </tr>
    `).join('');
    tbody.querySelectorAll('.btn-change-role').forEach(btn => {
      btn.addEventListener('click', async () => {
        const userId = btn.dataset.user;
        const select = document.querySelector(`.role-select[data-user="${userId}"]`);
        const newRoleId = parseInt(select.value);
        try {
          await handlers.onChangeRole(userId, newRoleId);
          loadUserList(handlers);
        } catch (err) {
          alert(err.message);
        }
      });
    });
    tbody.querySelectorAll('.btn-approve').forEach(btn => {
      btn.addEventListener('click', async () => {
        try {
          await handlers.onApprove(btn.dataset.user);
          loadUserList(handlers);
        } catch (err) {
          alert(err.message);
        }
      });
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="5">Error: ${err.message}</td></tr>`;
  }
}
