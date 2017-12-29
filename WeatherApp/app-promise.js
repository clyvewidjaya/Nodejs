const request = require('request');
const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
  .options({
    a: {
      alias: 'address',
      demand: true,
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h') //takes 2 param
  .argv;

var encodedAddr = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(encodedAddr)}`;


//axios.get returns a promise that is why we can use .then()
axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find address');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/9ea927a491a9c8e5e648c0bbbee2019a/${lat},${lng}?units=si`;

  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((resp) => {
  console.log(`Temperature: ${resp.data.currently.temperature} C`);
  console.log(`Feels Like: ${resp.data.currently.apparentTemperature} C`);
  console.log(`Wind Speed: ${resp.data.currently.windSpeed} km/h`);
  console.log(`Weather summary: ${resp.data.currently.summary}`);
}).catch((errorMessage) => {
  if (errorMessage.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
  } else {
    console.log(errorMessage.message);
  }
});
