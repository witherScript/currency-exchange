
require('dotenv').config();

export default class CurrencyService {
    static getExchangeRates(){
    //set targetCurrency to user-inputted value
    //dynamically update DOM dropdown for all currencies available 
        return fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
            .then(function(response) {
                if (!response.ok) {
                const errorMessage = `${response.status} ${response.statusText}`;
                throw new Error(errorMessage);
                } else {
                return response.json();
                }
            })      
            .catch(function(error) {
                return error;
            });
            }
       

}