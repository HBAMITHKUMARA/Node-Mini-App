console.log('Starting app...');

const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    }else {
        var latitude = results.latitude;
        var longitude = results.longitude;
        weather.getWeather({latitude, longitude}, (errorMessage, weatherResults) => {
            if(errorMessage) {
                console.log(errorMessage);
            }else {
                console.log(JSON.stringify(weatherResults, null, 2));
            }
        });
    }
});
