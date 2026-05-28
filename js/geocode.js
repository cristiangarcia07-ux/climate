export async function geocode(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=5&language=en&format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Geocoding failed');

  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error('City not found');
  }

  const r = data.results[0];
  const names = [...new Set(data.results.map(r => r.name))];
  return {
    name: r.name,
    names,
    country: r.country,
    countryCode: r.country_code,
    lat: r.latitude,
    lng: r.longitude,
    timezone: r.timezone
  };
}

export async function reverseGeocode(lat, lng) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`;
  const res = await fetch(url, {
    headers: { 'Accept-Language': 'en', 'User-Agent': 'ClimateChecker/1.0' }
  });
  if (!res.ok) throw new Error('Reverse geocoding failed');

  const data = await res.json();
  const address = data.address || {};

  const cityName = address.city || address.town || address.village || address.municipality || '';
  return {
    name: cityName,
    names: [cityName],
    country: address.country || '',
    countryCode: (address.country_code || '').toLowerCase(),
    lat,
    lng,
    timezone: ''
  };
}
