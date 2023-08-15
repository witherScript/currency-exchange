# Currency Exchange
##  Author: Genesis Scott
#### This repo uses the ExchangeRate API to convert USD to the user's desired currency

#### By Genesis Scott

## Setup/Installation Requirements

####   NOTE: This application fetches data from an external API (ExchangeRate) which requires authentication in the form of an API key.

### Getting an API Key

**1. Navigate to [this website](https://www.exchangerate-api.com/), press "Get Free Key!" by entering your email address**

<img src =./assets/api-setup.png height=300 width=600>

**2. The page will redirect to the dashboard, click the "API Keys" link on the left-side navigation bar.**

<img width="435" height=700 src="https://github.com/witherScript/currency-exchange/assets/38504961/6818c590-e9d4-4bdd-be1d-15f11e07bb1e">

 **3. Press "Add New API Key"**

<img width="647" alt="Screenshot 2023-08-15 at 12 58 09 AM" src="https://github.com/witherScript/currency-exchange/assets/38504961/4512d73e-f833-4dfe-b6dd-6b9af14b410a">

## HOW TO PROTECT YOUR API-KEY
### This project includes the dotenv dependency. 
### Here is how to use it to protect your API Key.

1. Create a .env file in your project's root dir (add to your .gitignore)
```bash
$ ~ cd Your-Project

$ mkdir .env

```
2. add the following line to your .env file:
```js
 API_KEY = <your_API_key>
```

3. Include the .env file in your project's service logic using imports:
```javascript
require('dotenv').config(); //this goes at the top of the file 

// Now you can access the variables from process.env
console.log(process.env.API_KEY); // Output: <your_API_key>
```

### Project set-up

1. Clone github repository onto your local macine:

```bash
$ git clone https://github.com/witherScript/currency-exchange
```
3. Install project dependencies using npm [Node Package Manager installation instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

```bash
$ npm install
```
4. Run project using npm run start

```bash
$ npm run start
```

## Known Bugs

- No reset button creates a cluttered UI with repeated form submissions

### Technologies Used

* Webpack
* Exchange Rate API
* ESLint
* JSON
* Babel
* Jest
  
## License
MIT License. Copywright 2021 Genesis Scott. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
