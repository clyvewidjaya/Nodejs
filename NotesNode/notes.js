//console.log('Starting notes.js');
const fs = require('fs');
//console.log(module);
//we can ofc store functions
var addNote = (title, body) => {
  //console.log('Adding note', title, body);
  var notes = [];
  var theNote = {
    title,body
  };

  try {
    var existNote = fs.readFileSync('notes-data.json');
    notes = JSON.parse(existNote);
  } catch (e){

  }
  var duplicateNotes = notes.filter((theNote) => theNote.title === title);
  if (duplicateNotes.length === 0){
    notes.push(theNote);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
  } else {

  }

};

var getAll  = () => {
  console.log('Adding all notes');
};

var removeNote = (title) => {
  console.log('Remove note');
};

var getNote = (title) => {
  //console.log('Getting note ', title);
  var theNote = fs.readFileSync('notes-data.json');
  var noteInObject = JSON.parse(theNote);
  console.log("Title: ", noteInObject.title);
  console.log("Body: ", noteInObject.body);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
//we need to export all the functions in order
//for the function to be used.
