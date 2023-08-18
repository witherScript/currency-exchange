import CurrencyService from './js/currency-service.js';
import Dropdown from './js/currencyDropdownConfig.js';
import CustomError from './js/handle-error.js';
import 'bootstrap';
import './css/styles.css'; 


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
      if (!response.conversion_rates || !response.conversion_rates[targetCurrency]) {
        throw new CustomError("Unsupported currency code");
      }
      const rate = response.conversion_rates[targetCurrency];
      return [(amt * rate).toFixed(2), true];
    } 
    
  } catch (error) {
    CustomError.handleError(error);
    return [error, false];
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
      document.getElementById('error-container').classList.remove('hidden'); 
    }    
}



function displayConversion(event) {
  event.preventDefault();
  const amt = parseFloat(document.getElementById('amt').value);
  const targetCurrency = document.getElementById('available-currencies').value;
  getConversion(amt, targetCurrency)
    .then(function(conversion) {
      if (conversion[1] === true && conversion[0]!=='NaN') {
        document.getElementById('results').innerHTML = `Your conversion is ${conversion[0]} ${targetCurrency}`;
      }
      else{
        document.getElementById('results').setAttribute('class', 'alert alert-danger');
        document.getElementById('results').innerHTML = 'This operation could not be completed';
        
      }
    });
}

window.addEventListener('load', async function(){
  const form = document.getElementById('to-convert');
  form.addEventListener('submit', displayConversion);
  try{
    const availableCurrencies = await getCurrencyList();
    if(typeof availableCurrencies === 'undefined'){
      throw new Error('An Error Occurred in accessing the API.');
    }
    else{
      Dropdown.updateDropdown(availableCurrencies);
    }
  }
  catch(error){
    this.document.querySelector('span#error-description').innerHTML = error.message;
    
  }
});