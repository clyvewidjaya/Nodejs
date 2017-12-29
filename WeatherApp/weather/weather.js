const request = require('request');

var getWeather = (results) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://api.darksky.net/forecast/9ea927a491a9c8e5e648c0bbbee2019a/${results.lat},${results.lng}?units=si`,
      json: true
    },(error, response, body) => {
      if (!error && response.statusCode === 200){
        resolve({
          address: results.address,
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,
          summary: body.currently.summary
        })
        //console.log('Temperature: ', body.currently.temperature);
      } else {
        reject('Unable to fetch weather');
        //console.log('Unable to fetch weather');
      }
    });
  });
};

module.exports.getWeather = getWeather;

/*
var getWeather = (results, callbackFunc) => {
  request({
    url: `https://api.darksky.net/forecast/9ea927a491a9c8e5e648c0bbbee2019a/${results.lat},${results.lng}?units=si`,
    json: true
  },(error, response, body) => {
    if (!error && response.statusCode === 200){
      callbackFunc(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        summary: body.currently.summary
      })
      //console.log('Temperature: ', body.currently.temperature);
    } else {
      callbackFunc('Unable to fetch weather');
      //console.log('Unable to fetch weather');
    }
  });
};
*/
