const request = require('request');

var geocodeAddress = (addr, callbackFunc) => {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(addr)}`,
    json: true
  }, (error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2)); //this will do as pretty print for json. second argument will
                                                      //always be undefined for most. third is 2 or 4
    //console.log(JSON.stringify(error, undefined, 2));
    if (error){
      callbackFunc('Unable to connect to Google servers');
    } else if (body.status === 'ZERO_RESULTS'){
      callbackFunc('Unable to find that address');
    } else if (body.status === 'OK'){
      callbackFunc(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      })
    }
  });

};

module.exports = {
  geocodeAddress
};
