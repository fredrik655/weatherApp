import iconCodes from './weatherIconData.json';



const generateSearchDiv = () => {
  const container = document.createElement("div");
  const form = document.createElement('form');
  const searchBar = document.createElement("input");
  const searchBtn = document.createElement("button");

  
  searchBtn.innerHTML = "Search";
  searchBar.required = true;
  searchBar.id = 'search-bar';
  searchBtn.id = 'search-btn';
  container.id = 'search-container';

  form.appendChild(searchBar);
  container.appendChild(form);
  container.appendChild(searchBtn);
  return container;
};

const generateCountryInfo = () => {
  const container = document.createElement("div");
  const countryText = document.createElement("h2");
  const countryImg = document.createElement("img");

  countryText.id = "country";
  countryImg.id = "country-img";
  container.id = 'country-container';

  container.appendChild(countryText);
  container.appendChild(countryImg);

  return container;
};

const generateWeatherInfo = () => {
  const container = document.createElement("div");
  const subContainer = document.createElement('div');
  const weatherImg = document.createElement("img");
  const deg = document.createElement("p");
  const weatherInfo = document.createElement("p");

  weatherImg.id = 'weather-img';
  deg.id = 'deg-text';
  weatherInfo.id = 'weather-info-text';
  container.id = 'info-container';

  subContainer.appendChild(weatherImg);
  subContainer.appendChild(deg);
  container.appendChild(subContainer);
  container.appendChild(weatherInfo);

  return container;
};

const loadMain = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");

  container.appendChild(generateSearchDiv());
  container.appendChild(generateCountryInfo());
  container.appendChild(generateWeatherInfo());
  body.appendChild(container);
};


const updateCountryInfo = (city, country) => {
  const countryText = document.querySelector("#country");
  const countryImg = document.querySelector("#country-img");

  const flagString = `https://www.countryflags.io/${country}/shiny/64.png`;

  countryText.textContent = `${city} | ${country}`;
  countryImg.src = flagString;
};

const updateTempInfo = (temp, weather, windSpeed) => {

  const tempText = document.querySelector('#deg-text');
  const weatherInfo = document.querySelector('#weather-info-text');
  const weatherImg = document.querySelector('#weather-img');
  const weatherIconString = `http://openweathermap.org/img/wn/${iconCodes.codes[weather.toLowerCase()].id}@2x.png`;

  weatherImg.src = weatherIconString;
  tempText.textContent = `${temp}\u00B0`;
  weatherInfo.textContent = `${weather}, wind speed: ${windSpeed}m/sec`;
}

const updateBackgroundColor = weather => {
  const container = document.querySelector('div');
  const colorString = iconCodes.codes[weather.toLowerCase()].color;

  container.style.backgroundImage = colorString;
}


// eslint-disable-next-line import/prefer-default-export
export { loadMain, updateCountryInfo , updateTempInfo, updateBackgroundColor};
