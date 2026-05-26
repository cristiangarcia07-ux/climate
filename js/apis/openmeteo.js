export async function fetchWeather(lat, lng) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,uv_index&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Open-Meteo API error');

  const data = await res.json();
  const c = data.current;
  return {
    source: 'Open-Meteo',
    temperature: c.temperature_2m,
    feelsLike: c.apparent_temperature,
    humidity: c.relative_humidity_2m,
    windSpeed: c.wind_speed_10m,
    uvIndex: c.uv_index,
    weatherCode: c.weather_code
  };
}
