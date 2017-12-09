console.log('Starting request-hacks...');

var request = require('request');

request(
    {
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=100%20feet%20road,%20bengaluru',
        json: true
    },
    (error, response, body) => {
        console.log(JSON.stringify(body, undefined, 2));
    }
);