console.log('Starting util.test...');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(6, 8);
    if(res !== 14) {
        throw new Error('expected 14, but got ' + res);
    }
});


it('should return a square of a number', () => {
    var res = utils.square(6);
    if(res !== 36) {
        throw new Error('expected 36, but got ' + res);
    }
});