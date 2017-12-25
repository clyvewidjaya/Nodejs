const request = require('request');
const yargs = require('yargs');

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
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`,
  json: true
}, (error, response, body) => {
  //console.log(JSON.stringify(body, undefined, 2)); //this will do as pretty print for json. second argument will
                                                    //always be undefined for most. third is 2 or 4
  //console.log(JSON.stringify(error, undefined, 2));
  if (error){
    console.log('Unable to connect to Google servers');
  } else if (body.status === 'ZERO_RESULTS'){
    console.log('Unable to find that address');
  } else if (body.status === 'OK'){
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    console.log(`Place ID: ${body.results[0].geometry.location_type}`);
  }
});
