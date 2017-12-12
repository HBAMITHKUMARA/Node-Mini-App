// weather app with axios module
// node app-axios/server.js -a=mysuru
console.log('Starting app...');

const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            describe: 'Address to fetch weather for',
            demand: true,
            alias: 'address',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// console.log(argv);

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('unable to find the address');
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    weatherUrl = `https://api.darksky.net/forecast/6da66973388167d3b4c48deb0c645bcb/${latitude},${longitude}`;
    return axios.get(weatherUrl);
})
.then((response) => {
    if(response.status === 200) {
        var temperature = {
            temperature: response.data.currently.temperature,
            apparentTemperature: response.data.currently.apparentTemperature
        };
        console.log(temperature);
    }else {
        throw new Error('unable to fetch weather');
    }
})
.catch((error) => {
    if(error.code === 'ENOTFOUND') {
        console.log('unable to connect to google servers');
    }else {
        console.log(error.message);
    }
});
