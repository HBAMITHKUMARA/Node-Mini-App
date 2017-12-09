console.log('Starting app...');

const request = require('request');
const yargs = require('yargs');

// var callback = require('./callbacks');

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

// encode and decode space in url
var encodedAddress = encodeURIComponent(argv.address);
var decodedAddress = decodeURIComponent();

request(
    {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    },
    (error, response, body) => {
        if(error) {
            console.log(error);
        }else {
            if (body.status === 'OK') {
                // console.log(JSON.stringify(body, undefined, 2));
                // console.log(JSON.stringify(response, undefined,2));
                console.log(`Place: ${body.results[0].address_components[0].long_name}`);
                console.log(`Place: ${body.results[0].address_components[1].long_name}`);
                console.log(`Place: ${body.results[0].address_components[2].long_name}`);
                console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
                console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
            }else {
                console.log('unable to find the address');
            }
        }
    }
);