console.log('Starting notes...');

var addNote = (title, body) => {
    console.log('Adding note: ', title, body);
};

var getAll = () => {
    console.log('Get all notes');
};

var getNote = (title) => {
  console.log('Reading note: ' + title);
};

var removeNote = (title) => {
    console.log('Removing note: ' + title);
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
};

