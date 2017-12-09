console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of a note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of a note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'list all notes')
    .command('read', 'read a note', {
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = process.argv[2];

if(command == 'add'){
    var note = notes.addNote(argv.title, argv.body);
    console.log('------------------------------');
    if(note){
        console.log('Note created!!!');
        notes.logNote(note);
    }else{
        console.log('Oops!!! Title already taken.');
    }
    console.log('------------------------------');
}else if(command == 'list'){
    var allNotes = notes.getAll();
    console.log('------------------------------');
    if(allNotes){
        console.log('Notes!!!');
        allNotes.forEach((note) => {
           notes.logNote(note);
        });
    }else{
        console.log('Oops!!! No notes available');
    }
    console.log('------------------------------');
}else if(command == 'read'){
    var note = notes.getNote(argv.title);
    console.log('------------------------------');
    if(note){
        console.log('Note found!!!');
        notes.logNote(note);
    }else{
        console.log('Oops!!! Note not found.');
    }
    console.log('------------------------------');
}else if(command == 'remove'){
    var status = notes.removeNote(argv.title);
    console.log('------------------------------');
    var message = status? 'Note was removed': 'Oops!!! Note not found';
    console.log(message);
    console.log('------------------------------');
} else{
    console.log('Command not recognized...');
}