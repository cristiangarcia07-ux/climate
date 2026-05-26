import { signUp, signIn, signOut, onAuthStateChanged } from './supabase.js';
import { fetchApiKeys } from './api_loader.js';
import { geocode } from './geocode.js';
import { fetchWeather as fetchOM } from './apis/openmeteo.js';
import { fetchWeather as fetchWA } from './apis/weatherapi.js';
import { fetchWeather as fetchOW } from './apis/openweather.js';
import { aggregate } from './aggregator.js';
import { renderAuth, renderApp, renderConfirmEmail, renderResults, showLoading, hideLoading, showError, hideError } from './ui.js';

const appEl = document.getElementById('app');

onAuthStateChanged((user) => {
  if (user) {
    if (!user.email_confirmed_at) {
      renderConfirmEmail(appEl, user.email);
    } else {
      renderApp(appEl, user, handleSearch, handleLogout);
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
    renderConfirmEmail(appEl, email, null);
  }
}

async function handleLogout() {
  await signOut();
}

async function handleSearch(query) {
  hideError();
  showLoading();

  try {
    let lat, lng;
    if (query.includes(',')) {
      const parts = query.split(',');
      lat = parseFloat(parts[0]);
      lng = parseFloat(parts[1]);
    } else {
      const geo = await geocode(query);
      lat = geo.lat;
      lng = geo.lng;
    }

    const keys = await fetchApiKeys(1);

    const results = await Promise.allSettled([
      fetchOM(lat, lng),
      keys.weatherapi ? fetchWA(lat, lng, keys.weatherapi) : Promise.reject(new Error('No WeatherAPI key')),
      keys.openweathermap ? fetchOW(lat, lng, keys.openweathermap) : Promise.reject(new Error('No OWM key'))
    ]);

    const fulfilled = results.map(r => r.status === 'fulfilled' ? r.value : null);
    const consensus = aggregate(fulfilled);

    hideLoading();
    renderResults(consensus, fulfilled);
  } catch (err) {
    hideLoading();
    showError(err.message);
  }
}
