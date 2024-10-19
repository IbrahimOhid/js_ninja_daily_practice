const weatherData = {
  country: "",
  city: "",
  API_KEY: "51833c7f9997391d687aff078c4b57dd",
  async getWeather() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.API_KEY}`
      );
      const { name, main, weather } = await res.json();
      console.log(weather[0]);
      return {
        name,
        main,
        weather,
      };
    } catch (err) {
      UI.showMessage("Data Not Found !!!", "danger");
    }
  },
};
const UI = {
  loadSelector() {
    const countryInputElm = document.querySelector("#countryInput");
    const cityInputElm = document.querySelector("#cityInput");
    const weatherCityElm = document.querySelector("#w-city");
    const weatherImgElm = document.querySelector("#w-img");
    const weatherTemperatureElm = document.querySelector("#w-temperature");
    const weatherPressureElm = document.querySelector("#w-pressure");
    const weatherHumidityElm = document.querySelector("#w-humidity");
    const messageElm = document.querySelector("#msg");
    const formElm = document.querySelector("form");
    return {
      countryInputElm,
      cityInputElm,
      weatherCityElm,
      weatherImgElm,
      weatherTemperatureElm,
      weatherPressureElm,
      weatherHumidityElm,
      messageElm,
      formElm,
    };
  },
  resetInput() {
    const { countryInputElm, cityInputElm } = this.loadSelector();
    countryInputElm.value = "";
    cityInputElm.value = "";
  },
  // hide message
  hideMsg() {
    const messageElm = document.querySelector("#message");
    setTimeout(() => {
      messageElm.remove();
    }, 2000);
  },
  // show message
  showMessage(msg, action = "danger") {
    const { messageElm } = this.loadSelector();
    const msgText = `<div class="alert alert-${action} text-center fw-bold" role="alert" id='message'>${msg}</div>`;
    messageElm.insertAdjacentHTML("afterbegin", msgText);
    this.hideMsg();
  },
  // input validation
  validation(country, city) {
    if (country === "" || city === "") {
      this.showMessage("Please Provide Necessary Info");
      return true;
    } else {
      return false;
    }
  },
  // get input
  getInputValues() {
    const { countryInputElm, cityInputElm } = this.loadSelector();
    const isInValid = this.validation(
      countryInputElm.value,
      cityInputElm.value
    );
    if (isInValid) return;
    return {
      country: countryInputElm.value,
      city: cityInputElm.value,
    };
  },
  // handel remote data
  async handelRemoteData() {
    const data = await weatherData.getWeather();
    return data;
  },
  getIcon(iconCode){
    return `https://openweathermap.org/img/w/${iconCode}.png`
  },
  populateUi(data) {
    const {
      weatherCityElm,
      weatherImgElm,
      weatherTemperatureElm,
      weatherPressureElm,
      weatherHumidityElm,
    } = this.loadSelector();
    const {name, main:{temp, humidity, pressure}, weather} = data;
    weatherCityElm.textContent = name;
    weatherTemperatureElm.textContent = temp;
    weatherHumidityElm.textContent = humidity;
    weatherPressureElm.textContent = pressure; 
    weatherImgElm.setAttribute('src', this.getIcon(weather[0].icon))
  },
  init() {
    const { formElm } = this.loadSelector();
    formElm.addEventListener("submit", async (e) => {
      e.preventDefault();
      // get value
      const { country, city } = this.getInputValues();
      // reset input
      this.resetInput();
      weatherData.country = country;
      weatherData.city = city;
      // handel remote data
      const data = await this.handelRemoteData();
      this.populateUi(data);
    });
  },
};
UI.init();
