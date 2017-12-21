var obj = {
  name: 'Clyve'
};

var strObj = JSON.stringify(obj);
//changes the obj into json,it is no longer var
console.log(typeof strObj);
console.log(strObj);

var personString = '{"name": "Clyve","age": 20}';
var person = JSON.parse(personString);
//will change from JSON string form to obj
console.log(typeof person);
console.log(person);

const fs = require('fs');
var originalNote = {
  title: 'SomeTitle',
  body: 'SomeBody'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(note.title);
