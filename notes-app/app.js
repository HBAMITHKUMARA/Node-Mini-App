console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;

var command = process.argv[2];

if(command == 'add'){
    var note = notes.addNote(argv.title, argv.body);
    console.log('------------------------------');
    if(note){
        console.log('Note created!!!');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }else{
        console.log('Oops!!! Title already taken.');
    }
    console.log('------------------------------');
}else if(command == 'list'){
    notes.getAll();
}else if(command == 'read'){
    notes.getNote(argv.title);
}else if(command == 'remove'){
    var status = notes.removeNote(argv.title);
    console.log('------------------------------');
    var message = status? 'Note was removed': 'Oops!!! Note not found';
    console.log(message);
    console.log('------------------------------');
} else{
    console.log('Command not recognized...');
}