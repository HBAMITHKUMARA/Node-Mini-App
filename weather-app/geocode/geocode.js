console.log('Starting geocode...');

const request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);
    return new Promise((resolve, reject) => {
        request(
            {
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                json: true
            },
            (error, response, body) => {
                if(error) {
                    reject('unable to connect to google servers');
                }else {
                    if (body.status === 'OK') {
                        resolve({
                            address: body.results[0].formatted_address,
                            longitude: body.results[0].geometry.location.lng,
                            latitude: body.results[0].geometry.location.lat
                        });
                    }else {
                        reject('unable to find the address');
                    }
                }
            }
        );
    });
};

module.exports = {
   geocodeAddress
};
