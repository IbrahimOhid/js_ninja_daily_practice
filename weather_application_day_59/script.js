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
    const messageElm = document.querySelector('#msg');
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
  resetInput(){
    const {countryInputElm, cityInputElm} = this.loadSelector();
    countryInputElm.value = '';
    cityInputElm.value = '';
  },
  // hide message
  hideMsg(){
    const {messageElm} = this.loadSelector();
    setTimeout(() => {
      messageElm.remove();
    }, 2000);
  },
  // show message
  showMessage(msg, action='danger'){
    const {messageElm} = this.loadSelector();
    const msgText = `<div class="alert alert-${action} text-center fw-bold" role="alert">${msg}</div>`;
    messageElm.insertAdjacentHTML('afterbegin', msgText);
    this.hideMsg()
  },
  // input validation
  validation(country, city){
    if(country === '' || city === ''){
      this.showMessage('Please Provide Necessary Info');
      return true;
    }else{
      return false;
    }
  },
  // get input 
  getInputValues(){
    const {countryInputElm, cityInputElm} = this.loadSelector();
   const isInValid = this.validation(countryInputElm.value, cityInputElm.value);
   if(isInValid)return;
    return{
      countryInputElm,
      cityInputElm
    }
  },
  init() {
    const {formElm} = this.loadSelector();
    formElm.addEventListener('submit', (e)=>{
      e.preventDefault();
      // get value
      const {countryInputElm, cityInputElm} = this.getInputValues();
      this.resetInput(countryInputElm, cityInputElm);
    })
  },
};
UI.init();
