// selector
const UI = {
  loadSelector() {
    const countryInputElm = document.querySelector("#countryInput");
    const cityInputElm = document.querySelector("#cityInput");
    const weatherCityElm = document.querySelector("#w-city");
    const weatherImgElm = document.querySelector("#w-img");
    const weatherTemperatureElm = document.querySelector("#w-temperature");
    const weatherPressureElm = document.querySelector("#w-pressure");
    const weatherHumidityElm = document.querySelector("#w-humidity");
    const formElm = document.querySelector('form');
    return{
        countryInputElm,
        cityInputElm,
        weatherCityElm,
        weatherImgElm,
        weatherTemperatureElm,
        weatherPressureElm,
        weatherHumidityElm,
        formElm
    }
  },
};
