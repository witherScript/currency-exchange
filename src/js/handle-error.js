export default class CustomError extends Error {
  constructor(message){
    super(message);
  }
  static handleError(error) {
    const errorCode = document.getElementById('error-code');
    const errorContainer = document.getElementById('error-message');
    const errorDescription = document.getElementById('error-description');
    if (error["error-type"] === "unsupported-code") {
      errorContainer.innerHTML = error["error-type"] + "<br> Please select a valid currency or enter your own.";
    } else {
      errorContainer.innerText = error["error-type"];
    }
    
    errorCode.innerText = error["error-type"];
    if (errorDescription) {
      errorDescription.innerText = error["error-description"] || ''; // Assuming there's an error-description property
    }
    document.querySelector('.error').classList.remove('hidden');
  }


}