import { weatherCodeToEmoji } from './aggregator.js';

export function renderAuth(container, onLogin, onSignup) {
  container.innerHTML = `
    <div class="auth-card">
      <h2>Climate Checker</h2>
      <form id="auth-form">
        <input type="email" id="auth-email" placeholder="Email" required>
        <input type="password" id="auth-password" placeholder="Password" required>
        <div class="auth-buttons">
          <button type="submit" id="btn-login">Sign In</button>
          <button type="button" id="btn-signup">Sign Up</button>
        </div>
      </form>
      <p id="auth-error" class="error"></p>
    </div>
  `;

  document.getElementById('auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    try {
      await onLogin(email, password);
    } catch (err) {
      document.getElementById('auth-error').textContent = err.message;
    }
  });

  document.getElementById('btn-signup').addEventListener('click', async () => {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    if (!email || !password) {
      document.getElementById('auth-error').textContent = 'Enter email and password';
      return;
    }
    try {
      await onSignup(email, password);
      document.getElementById('auth-error').textContent = 'Check your email for confirmation!';
    } catch (err) {
      document.getElementById('auth-error').textContent = err.message;
    }
  });
}

export function renderApp(container, user, onSearch, onLogout) {
  container.innerHTML = `
    <header>
      <h1>Climate Checker</h1>
      <div class="header-right">
        <span class="user-email">${user.email}</span>
        <button id="btn-logout">Logout</button>
      </div>
    </header>
    <main>
      <div class="search-bar">
        <input type="text" id="city-input" placeholder="Search city..." autofocus>
        <button id="btn-search">Search</button>
        <button id="btn-geolocate" title="Use my location">&#128205;</button>
      </div>
      <div id="loading" class="loading hidden">Loading...</div>
      <div id="error" class="error hidden"></div>
      <div id="results"></div>
      <div class="sources" id="sources"></div>
    </main>
  `;

  document.getElementById('btn-logout').addEventListener('click', onLogout);
  document.getElementById('btn-search').addEventListener('click', () => {
    const q = document.getElementById('city-input').value.trim();
    if (q) onSearch(q);
  });
  document.getElementById('city-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = e.target.value.trim();
      if (q) onSearch(q);
    }
  });
  document.getElementById('btn-geolocate').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => onSearch(`${pos.coords.latitude},${pos.coords.longitude}`),
      () => showError('Geolocation denied or unavailable')
    );
  });
}

export function showLoading() {
  const el = document.getElementById('loading');
  if (el) el.classList.remove('hidden');
}

export function hideLoading() {
  const el = document.getElementById('loading');
  if (el) el.classList.add('hidden');
}

export function showError(msg) {
  const el = document.getElementById('error');
  if (el) {
    el.textContent = msg;
    el.classList.remove('hidden');
  }
}

export function hideError() {
  const el = document.getElementById('error');
  if (el) el.classList.add('hidden');
}

export function renderResults(consensus, sources) {
  const resultsEl = document.getElementById('results');
  const sourcesEl = document.getElementById('sources');

  if (!consensus) {
    resultsEl.innerHTML = '<div class="card error-card">No data available</div>';
    sourcesEl.innerHTML = '';
    return;
  }

  const tempColor = consensus.temperature !== null
    ? getTempColor(consensus.temperature)
    : '#666';

  resultsEl.innerHTML = `
    <div class="card consensus-card" style="--accent: ${tempColor}">
      <h2>Consensus</h2>
      <div class="temp-large">${formatTemp(consensus.temperature)}</div>
      <div class="stats">
        <div class="stat">
          <span class="stat-label">Feels like</span>
          <span class="stat-value">${formatTemp(consensus.feelsLike)}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Humidity</span>
          <span class="stat-value">${formatPct(consensus.humidity)}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Wind</span>
          <span class="stat-value">${formatSpeed(consensus.windSpeed)}</span>
        </div>
        <div class="stat">
          <span class="stat-label">UV</span>
          <span class="stat-value">${formatNum(consensus.uvIndex)}</span>
        </div>
      </div>
      <div class="source-count">Averaged from ${consensus.sourceCount} source(s)</div>
    </div>
  `;

  sourcesEl.innerHTML = sources.map(s => {
    if (!s) return '';
    const emoji = s.weatherCode !== undefined
      ? weatherCodeToEmoji(s.weatherCode)
      : '';
    return `
      <div class="card source-card">
        <h3>${emoji} ${s.source}</h3>
        <div class="stats">
          <div class="stat">
            <span class="stat-label">Temp</span>
            <span class="stat-value">${formatTemp(s.temperature)}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Feels like</span>
            <span class="stat-value">${formatTemp(s.feelsLike)}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Humidity</span>
            <span class="stat-value">${formatPct(s.humidity)}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Wind</span>
            <span class="stat-value">${formatSpeed(s.windSpeed)}</span>
          </div>
          ${s.condition ? `<div class="stat condition">${s.condition}</div>` : ''}
        </div>
      </div>
    `;
  }).filter(Boolean).join('');
}

function getTempColor(temp) {
  if (temp <= 0) return '#4a90d9';
  if (temp <= 10) return '#5b9bd5';
  if (temp <= 20) return '#f5a623';
  if (temp <= 30) return '#e8833a';
  return '#d94a4a';
}

function formatTemp(v) {
  return v !== null && v !== undefined ? `${Math.round(v)}°C` : '--';
}

function formatPct(v) {
  return v !== null && v !== undefined ? `${Math.round(v)}%` : '--';
}

function formatSpeed(v) {
  return v !== null && v !== undefined ? `${Math.round(v)} km/h` : '--';
}

function formatNum(v) {
  return v !== null && v !== undefined ? v.toFixed(1) : '--';
}
