import { supabase } from './supabase.js';

export async function fetchApiKeys(paisId) {
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
