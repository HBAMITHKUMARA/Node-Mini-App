console.log('Starting general-hacks...');

// encode and decode space, comma, etc., in url
var encodedString = encodeURIComponent('100 feet road, bengaluru, india');
console.log('encodedString: ', encodedString);

var decodedString = decodeURIComponent('100%20feet%20road%2C%20bengaluru%2C%20india');
console.log('decodedString: ', decodedString);

// Destructuring assignment
let person = {
    name: 'ami',
    age: 23,
    location: 'bengaluru'
};
let {name} = person;
console.log('name:  ', name);

const path = require('path');
// console.log('path', path);
console.log('path-join plain method', __dirname + '/../hello-world');
console.log('path-join using node path module', path.join(__dirname +  '/../hello-world'));