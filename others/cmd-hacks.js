console.log('Starting cmd-hacks...');

var args = process.argv;
console.log('args:   ' + args);

var args0 = process.argv[0];
console.log('args0:   ' + args0);

var args1 = process.argv[1];
console.log('args1:   ' + args1);

var args2 = process.argv[2];
console.log('args2:   ' + args2);

var args3 = process.argv[3];
console.log('args3:   ' + args3);

// method - 2 using yargs
const yargs = require('yargs');

var args = yargs.argv;
console.log('yargs args:   ' + args);