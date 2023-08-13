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
  try{
    if(amt === ''){
      throw new Error('Error: Please enter a valid amount.');
    }
    if(targetCurrency === ''){
      throw new Error('Error: Please select a valid currency.');
    }

    const response = await CurrencyService.getExchangeRates();
    if(typeof response === 'undefined'){
      throw new Error('Error: the API call was unsuccessful.');
    }
    else{
      const rate = response.conversion_rates[targetCurrency];
      return (amt*rate).toFixed(2);
    }
  }

  catch(error){
    return error;
  }
  
}

async function getCurrencyList(){
  try{
    const response = await CurrencyService.getExchangeRates();
    if( typeof response === "undefined"){
      throw new Error('Error: the API call was unsuccessful.');
    }
    else{
      return response.conversion_rates;
    }
  }
  catch(error){
      console.log(error.message);
    }    
}



function displayConversion(event){
  event.preventDefault();
  const amt = parseFloat(document.getElementById('amt').value);
  const targetCurrency = document.getElementById('available-currencies').value;
  getConversion(amt, targetCurrency)
    .then(function(conversion){
      if(typeof conversion === 'undefined'){
        const failedConversionAttempt = conversion;
        document.getElementById('results').innerHTML=failedConversionAttempt.message; //display error and message
      } else {
        document.getElementById('results').innerHTML = `Your conversion is ${conversion} ${targetCurrency}`;
      }
    });

}


window.addEventListener('load', async function(){
  const form = document.getElementById('to-convert');
  form.addEventListener('submit', displayConversion);
  try{
    const availableCurrencies = await getCurrencyList();
    if(typeof availableCurrencies === 'undefined'){
      throw new Error('Error');
    }
    else{
      Dropdown.updateDropdown(availableCurrencies);
    }
  }
  catch(error){
    console.log('error');
  }
});