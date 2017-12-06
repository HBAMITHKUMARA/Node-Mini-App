console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var user = os.userInfo();
// console.log('Hi ' + user.username + '!!!! Here is user details...');
// console.log(user);

fs.appendFileSync('greeting.txt', 'Hello Wold!!!!!');

console.log(notes.addNote());
console.log(notes.add(4,2));

// fs.appendFile('greeting.txt', 'Hello Wold!!!!!');

//
// fs.appendFile('greeting.txt', 'Hello Wold!!!!!', function(err) {
//    if(err) {
//        console.log('error:  ', err);
//    }
// });


