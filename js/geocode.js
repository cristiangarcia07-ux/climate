export async function geocode(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=5&language=en&format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Geocoding failed');

  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error('City not found');
  }

  const r = data.results[0];
  return {
    name: r.name,
    country: r.country,
    countryCode: r.country_code,
    lat: r.latitude,
    lng: r.longitude,
    timezone: r.timezone
  };
}
