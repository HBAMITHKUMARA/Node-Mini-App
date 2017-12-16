console.log('Starting user...');

let mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 7
    }
});

module.exports = {
    User
};