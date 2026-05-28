import { supabase } from './supabase.js';
import { geocode } from './geocode.js';
import { fetchWeather as fetchOM } from './apis/openmeteo.js';
import { fetchWeather as fetchWA } from './apis/weatherapi.js';
import { fetchWeather as fetchOW } from './apis/openweather.js';
import { aggregate } from './aggregator.js';
import { renderPublicApp, renderResults, showLoading, hideLoading, showError, hideError } from './ui.js';

const REFRESH_MS = 180000;
let refreshTimer = null;
let lastQuery = null;

const appEl = document.getElementById('app');
renderPublicApp(appEl, handleSearch);

detectLocation();

function detectLocation() {
  if (!navigator.geolocation) return;
  showLoading();
  navigator.geolocation.getCurrentPosition(
    (pos) => handleSearch(`${pos.coords.latitude},${pos.coords.longitude}`),
    () => hideLoading(),
    { timeout: 5000 }
  );
}

async function handleSearch(query, silent = false) {
  lastQuery = query;
  clearInterval(refreshTimer);
  refreshTimer = setInterval(() => { if (lastQuery) handleSearch(lastQuery, true); }, REFRESH_MS);

  hideError();
  if (!silent) {
    showLoading();
  }

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

    if (!silent) hideLoading();
    renderResults(consensus, fulfilled);
  } catch (err) {
    if (!silent) hideLoading();
    if (!silent) showError(err.message);
  }
}

async function fetchApiKeys(paisId) {
  const { data, error } = await supabase
    .from('api_links')
    .select('url')
    .eq('id_pais', paisId);

  if (error) throw error;

  const keys = { weatherapi: null, openweathermap: null };
  for (const row of data) {
    if (row.url.includes('weatherapi')) keys.weatherapi = row.url;
    if (row.url.includes('openweathermap')) keys.openweathermap = row.url;
  }
  return keys;
}
