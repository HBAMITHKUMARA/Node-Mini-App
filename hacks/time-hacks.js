console.log('Starting time-hacks...');

const moment = require('moment');

console.log('general method');
let date1 = new Date();
console.log(date1.getMonth());


console.log('better method');
let date = moment();
console.log(date.format());
console.log(date.format('MMM'));
console.log(date.format('YYYY'));
console.log(date.format('Do'));
console.log(date.format('DD'));
console.log(date.format('MMM YYYY'));
console.log(date.format('MMM YYYY DD'));


date.add(7, 'days');
console.log(date.format('MMM YYYY DD'));

date.add(2, 'years').subtract(1, 'year');
console.log(date.format('MMM YYYY DD'));

console.log(date.format('h:mm a'));