const convertKelvinToCelsius = (kelvin) => +kelvin - 273.15;
const convertKelvinToFahrenheit = (kelvin) => convertKelvinToCelsius(kelvin) * (9 / 5) + 32;

const processApiData = (jsonData) => {
  const city = jsonData.name;
  const { country } = jsonData.sys;
  const tempKelvin = jsonData.main.temp;
  const weather = jsonData.weather[0].main;
  const windSpeed = jsonData.wind.speed;

  const convertedTemp = +convertKelvinToCelsius(tempKelvin).toFixed(1);

  const processedData = {
    city,
    country,
    temp: convertedTemp,
    weather,
    windSpeed,
  };

  return processedData;
};



// eslint-disable-next-line import/prefer-default-export
export { processApiData, convertKelvinToCelsius, convertKelvinToFahrenheit };
