console.log('Starting hashing...');

const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');

// let message = 'hbamithkumara';
// let hash = SHA256(message).toString();
// console.log('hbamithkumara: ', hash);

password = 'testabc1'

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('hash:  ', hash);
    });
});