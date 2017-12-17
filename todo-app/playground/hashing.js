console.log('Starting hashing...');

const {SHA256} = require('crypto-js');

let message = 'i am ami';
let hash = SHA256(message).toString();

console.log(hash);