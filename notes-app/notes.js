console.log('Starting notes...');

const fs = require('fs');

let fetchNotes = () => {
    try{
        let stringNotes = fs.readFileSync('notes-data.json');
        return JSON.parse(stringNotes);
    }catch(e){
        console.log('Error in reading/Empty file');
        return [];
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
    }
};

var getAll = () => {
    console.log('Get all notes');
    console.log(fetchNotes());
};

var getNote = (title) => {
  console.log('Reading note: ' + title);
  notes = fetchNotes();
  note = notes.filter((note) => {
   if(note.title === title){
       return note;
   }
  });
  console.log(note);
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
};

