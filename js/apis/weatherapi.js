export async function fetchWeather(lat, lng, apiUrl) {
  const url = apiUrl.replace('{lat}', lat).replace('{lng}', lng);
  const res = await fetch(url);
  if (!res.ok) throw new Error('WeatherAPI error');

  const data = await res.json();
  return {
    source: 'WeatherAPI',
    temperature: data.current.temp_c,
    feelsLike: data.current.feelslike_c,
    humidity: data.current.humidity,
    windSpeed: data.current.wind_kph,
    uvIndex: data.current.uv,
    condition: data.current.condition.text
  };
}
