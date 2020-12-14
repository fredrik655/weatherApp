import { loadMain, updateCountryInfo , updateTempInfo, updateBackgroundColor} from "./dom";
import { processApiData } from "./processdata";
import { fetchWeatherData } from "./datafetch";

function searchBtnEvent() {
  const searchBar = document.querySelector('#search-bar');
  if(!searchBar.validity.valueMissing){
    searchBar.setCustomValidity('');
    fetchWeatherData(searchBar.value).then((data) => {
      const processData = processApiData(data);
      updateCountryInfo(processData.city, processData.country);
      updateTempInfo(processData.temp, processData.weather, processData.windSpeed);
      updateBackgroundColor(processData.weather);
      searchBar.value = '';
    });
  }
  else {
    searchBar.setCustomValidity('Enter a city');
  }
}

function App() {
  loadMain();

  const defaultCity = "london";
  const searchBtn = document.querySelector('#search-btn');

  searchBtn.addEventListener('click', searchBtnEvent);
  
  
  fetchWeatherData(defaultCity).then((data) => {
    const processData = processApiData(data);
    updateCountryInfo(processData.city, processData.country);
    updateTempInfo(processData.temp, processData.weather, processData.windSpeed);
    updateBackgroundColor(processData.weather);
  })
  .catch(error => {
    console.error(error);
  });
}



App();
