console.log('Starting geocode...');

const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request(
        {
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        },
        (error, response, body) => {
            if(error) {
                callback('unable to connect to google servers');
            }else {
                if (body.status === 'OK') {
                    callback(undefined, {
                        address: body.results[0].formatted_address,
                        longitude: body.results[0].geometry.location.lng,
                        latitude: body.results[0].geometry.location.lat
                    })
                    // console.log(JSON.stringify(body, undefined, 2));
                    // console.log(JSON.stringify(response, undefined,2));
                    // console.log(`Place: ${body.results[0].address_components[0].long_name}`);
                    // console.log(`Place: ${body.results[0].address_components[1].long_name}`);
                    // console.log(`Place: ${body.results[0].address_components[2].long_name}`);
                }else {
                    callback('unable to find the address');
                }
            }
        }
    );
}

module.exports = {
   geocodeAddress
};
