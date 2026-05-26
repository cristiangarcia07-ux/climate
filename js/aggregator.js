export function aggregate(results) {
  const sources = results.filter(r => r !== null);
  if (sources.length === 0) return null;

  const avg = (key) => {
    const vals = sources.filter(s => s[key] !== undefined && s[key] !== null);
    return vals.length > 0
      ? vals.reduce((a, b) => a + b[key], 0) / vals.length
      : null;
  };

  return {
    temperature: avg('temperature'),
    feelsLike: avg('feelsLike'),
    humidity: avg('humidity'),
    windSpeed: avg('windSpeed'),
    uvIndex: avg('uvIndex'),
    sourceCount: sources.length
  };
}

export function weatherCodeToEmoji(code) {
  if (code === 0) return '&#9728;';
  if (code <= 3) return '&#9729;';
  if (code <= 48) return '&#127788;';
  if (code <= 57) return '&#127783;';
  if (code <= 67) return '&#127782;';
  if (code <= 77) return '&#10052;';
  if (code <= 82) return '&#127783;';
  if (code <= 86) return '&#10052;';
  return '&#9729;';
}
