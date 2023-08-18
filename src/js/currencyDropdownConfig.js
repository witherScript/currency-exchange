/*
pull api response, process json, 
if currencies are available, dynamically update the dropdown field accordingly
*/

export default class Dropdown{
  static updateDropdown(currencyObj){
    let currencyList = Object.keys(currencyObj);
    let num = currencyList.length;
    for(let i=0; i<num; i++){
      let option = document.createElement('option');
      option.text = currencyList[i];
      option.value = currencyList[i];
      let dropdown = document.getElementById('available-currencies');
      dropdown.appendChild(option);
    }
  }
}