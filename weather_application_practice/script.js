const weather = {
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
        weather
      };
    } catch (err) {
      UI.showMessage('Data Not Found', 'danger')
    }
  },
};

const UI = {
  // all selector
  loadSelector() {
    const countryInputElm = document.querySelector("#countryInput");
    const cityInputElm = document.querySelector("#cityInput");
    const formElm = document.querySelector("form");
    const wCity = document.querySelector("#w-city");
    const wImg = document.querySelector("#w-img");
    const wTemp = document.querySelector("#w-temp");
    const wPressure = document.querySelector("#w-pressure");
    const wHumidity = document.querySelector("#w-humidity");
    const wName = document.querySelector('#w-name')
    const messageElm = document.querySelector("#msg");
    return {
      countryInputElm,
      cityInputElm,
      formElm,
      wCity,
      wImg,
      wTemp,
      wName,
      wPressure,
      wHumidity,
      messageElm,
    };
  },
  resetInput() {
    const { countryInputElm, cityInputElm } = this.loadSelector();
    countryInputElm.value = "";
    cityInputElm.value = "";
  },
  hideMsg() {
    const messageElm = document.querySelector("#message");
    setTimeout(() => {
      messageElm.remove();
    }, 2000);
  },
  showMessage(msg, action = "danger") {
    const { messageElm } = this.loadSelector();
    const msgText = `<div class="alert alert-${action} text-center" role="alert" id='message'>${msg}</div>`;
    messageElm.insertAdjacentHTML("afterbegin", msgText);
    this.hideMsg();
  },
  validationInput(country, city) {
    if (country === "" || city === "") {
      this.showMessage("Please Provide Necessary Info");
      return true;
    } else {
      return false;
    }
  },
  getInput() {
    const { countryInputElm, cityInputElm } = this.loadSelector();
    const isInValid = this.validationInput(
      countryInputElm.value,
      cityInputElm.value
    );
    if (isInValid) return;
    return {
      country: countryInputElm.value,
      city: cityInputElm.value,
    };
  },
async handelRemoteData() {
   const data = await weather.getWeather();
   return data;
    
  },
  getIcon(iconCode){
    return `https://openweathermap.org/img/w/${iconCode}.png`
  },
  showDataUi(data){
    const {
        wName,
        wCity,
        wImg,
        wTemp,
        wPressure,
        wHumidity,
    } = this.loadSelector();
    const {name, main:{temp, pressure, humidity}, weather} = data;
    wCity.textContent = name,
    wName.textContent = weather[0].description
    wTemp.textContent = temp,
    wHumidity.textContent = humidity,
    wPressure.textContent = pressure,
    wImg.setAttribute('src', this.getIcon(weather[0].icon))
  },
  init() {
    const { formElm } = this.loadSelector();
    formElm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const { country, city } = this.getInput();
      this.resetInput();
      weather.country = country;
      weather.city = city;
      const data = await this.handelRemoteData();
      this.showDataUi(data)
    });
  },
};
UI.init();
