import CurrencyService from './js/currency-service.js';
import Dropdown from './js/currencyDropdownConfig.js';
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

function displayConversion(event){
  event.preventDefault();
  const amt = document.getElementById('amount').value;
  const targetCurrency = document.getElementById('targetCurrency').value;
  getConversion(amt, targetCurrency)
    .then(function(response){
      if(response instanceof Error){
        console.log(response.message); //display error and message
      } else {
        document.getElementById('result').innerHTML = `Your conversion is ${response} ${targetCurrency}`;
      }
    });

}


window.addEventListener('load', async function(){
  const form = document.getElementById('currency-form');
  try{
    let response = await CurrencyService.getExchangeRates();
    if(response instanceof undefined){
      throw new Error('Error');
    }
    Dropdown.updateDropdown(response.conversion_rates);
  }
  catch(error){
    console.log('error');
  }

  form.addEventListener('submit', displayConversion);
});