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

geocode.geocodeAddress(argv.address)
.then((results) => {
    var latitude = results.latitude;
    var longitude = results.longitude;
    weather.getWeather({latitude, longitude})
        .then(
            (weatherResults) => {
                console.log(JSON.stringify(weatherResults, null, 2));
            }
        );
})
.catch((errorMessage) => {
    console.log(errorMessage);
});