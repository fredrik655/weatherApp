async function fetchWeatherData(city) {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5024362a075ebbf76767aeed3591f2d`,
      {mode: 'cors'},
    );
    const weatherData = await data.json();
    return weatherData;
  } catch (error) {
    console.error(error);
    return error;
  }
  
}

// eslint-disable-next-line import/prefer-default-export
export { fetchWeatherData };
