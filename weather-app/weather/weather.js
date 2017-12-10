console.log('Starting weather...');

const request = require('request');

var getWeather = (location) => {
    return new Promise((resolve, reject) => {
        request({
                url: `https://api.darksky.net/forecast/6da66973388167d3b4c48deb0c645bcb/${location.latitude},${location.longitude}`,
                json: true
            },
            (error, response, body) => {
                if(error) {
                    reject('unable to connect to forecast.io servers');
                }else {
                    if(response.statusCode === 200) {
                        resolve({
                            temperature: body.currently.temperature,
                            apparentTemperature: body.currently.apparentTemperature
                        });
                    }else {
                        reject('oops!! unable to fetch weather');
                    }
                }
            }
        );
    });
};

module.exports = {
    getWeather
};