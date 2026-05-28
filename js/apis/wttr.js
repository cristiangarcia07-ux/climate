export async function fetchWeather(lat, lng) {
  const url = `https://wttr.in/~${lat},${lng}?format=j1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('wttr.in error');

  const data = await res.json();
  const cc = data.current_condition[0];
  return {
    source: 'wttr.in',
    temperature: parseFloat(cc.temp_C),
    feelsLike: parseFloat(cc.FeelsLikeC),
    humidity: parseInt(cc.humidity, 10),
    windSpeed: parseFloat(cc.windspeedKmph),
    uvIndex: parseFloat(cc.uvIndex),
    condition: cc.weatherDesc[0].value,
    weatherCode: parseInt(cc.weatherCode, 10)
  };
}
