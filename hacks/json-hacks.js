console.log('Starting json-hacks...');

const fs = require('fs');

var objPerson = {
    name: 'ami',
    id: 14
};
console.log(typeof objPerson);
console.log(objPerson);

// object to string
var jsonPerson = JSON.stringify(objPerson);
console.log(typeof jsonPerson);
console.log(jsonPerson);

fs.writeFileSync('notes.json', jsonPerson);

var stringPerson = fs.readFileSync('notes.json');
// string to json
var newObjPerson = JSON.parse(stringPerson);
console.log(typeof newObjPerson);
console.log(newObjPerson);
