console.log('Starting app...');

const db = require('./db');

let signUp = (email, password) => {
    db.saveUser({
        email,
        password
    });
};

module.exports = {
    signUp
};