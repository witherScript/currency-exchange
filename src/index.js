import CurrencyService from './js/currency-service.js';
import './css/styles.css';
import 'bootstrap';

//on implementing call to currency exchange,
// call currencyDropDownConfig to update the html with the currencies on
// the dropdown field
// if the currency is unavailable, have an "other" option that allows the
// user to manually enter the exchg rate

async function getConversion(amt, targetCurrency){
  
  const response = await CurrencyService.getExchangeRates();
  const rate = response.conversion_rates[targetCurrency];
  return (amt*rate).toFixed(2);
}


window.addEventListener('load', function(){
  //TODO
})