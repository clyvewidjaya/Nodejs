const request = require('request');
const yargs = require('yargs');

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

//console.log(argv.address);
//var encodedAddr = encodeURIComponent(argv.address);
//console.log(argv);
geocode.geocodeAddress(argv.address, (gerrorMessage, gResults) => {
  if (gerrorMessage){
    console.log(gerrorMessage);
  } else {
    //console.log(JSON.stringify(results, undefined, 2));
    weather.getWeather(gResults, (werrorMessage, wResults) => {
      if (werrorMessage){
        console.log(werrorMessage);
      } else {
        console.log(gResults.address);
        console.log(`It is currently ${wResults.temperature} Celcius, feels like ` +
          `${wResults.apparentTemperature} Celcius. Weather summary: ${wResults.summary}`);
      }
    });
  }
});
//https://api.darksky.net/forecast/9ea927a491a9c8e5e648c0bbbee2019a/37.8267,-122.4233
