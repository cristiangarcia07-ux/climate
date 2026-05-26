export async function fetchWeather(lat, lng, apiUrl) {
  const url = apiUrl.replace('{lat}', lat).replace('{lng}', lng);
  const res = await fetch(url);
  if (!res.ok) throw new Error('OpenWeatherMap API error');

  const data = await res.json();
  return {
    source: 'OpenWeatherMap',
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed * 3.6,
    condition: data.weather[0].description
  };
}
