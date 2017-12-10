console.log('Starting weather...');

const request = require('request');

var getWeather = (location, callback) => {
    request({
            url: `https://api.darksky.net/forecast/6da66973388c645bcb/${location.latitude},${location.longitude}`,
            json: true
        },
        (error, response, body) => {
            if(error) {
                callback('unable to connect to forecast.io servers');
            }else {
                if(response.statusCode === 200) {
                    callback(undefined, {
                        temperature: body.currently.temperature,
                        apparentTemperature: body.currently.apparentTemperature
                    });
                }else {
                    callback('oops!! unable to fetch weather');
                }

            }
        }
    );
};

module.exports = {
    getWeather
};