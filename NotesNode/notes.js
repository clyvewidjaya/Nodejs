//console.log('Starting notes.js');
const fs = require('fs');
const _ = require('lodash');
const readline = require('readline');
//console.log(module);
//we can ofc store functions
var fetchNotes = () => {
  try {
    var existNote = fs.readFileSync('notes-data.json');
    return JSON.parse(existNote);
  } catch(e) {
    return [];
  }
};

var saveNotes = (notes) => {
  var sortedNotes = _.sortBy(notes, (notes) => notes.title);
  fs.writeFileSync('notes-data.json',JSON.stringify(sortedNotes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var theNote = {
    title,body
  };

  var duplicateNotes = notes.filter((theNote) => theNote.title === title);

  if (duplicateNotes.length === 0){
    notes.push(theNote);
    saveNotes(notes);
    return theNote;
  }
};

var editNote = (title) => {
  var notes = fetchNotes();
  var filtered = notes.filter((notes) => notes.title === title);
  logNote(filtered[0]);
  removeNote(title);
  //var theTitle = filtered[0].title;
  const r2 = readline.createInterface({input: process.stdin, output: process.stdout});
  r2.question('Input new body => ', (body) => {
    addNote(title, body);
    console.log("Edited!");
    r2.clearLine();
    r2.close();
  });
};

var getAll  = () => {
  var notes = fetchNotes();
  /*
  _.forEach(notes, (clyve) => {
    logNote(clyve);
  });
  */
  //or
  notes.forEach((widjaya) => logNote(widjaya));
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var newNote = notes.filter((notes) => notes.title !== title);
  saveNotes(newNote);
  return notes.length !== newNote.length;
};

var getNote = (title) => {
  var notes = fetchNotes();
  /*
  _.forEach(notes, (notes) => {
    if (notes.title === title){
      console.log(`Title: ${notes.title}`);
      console.log(`Body: ${notes.body}`);
    }
  });
  */ //another way to do it, this is your own way, below is videos
  var filteredNotes = notes.filter((notes) => notes.title === title);
  return filteredNotes[0];
};

var logNote = (note) => {
  debugger;
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  editNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
//we need to export all the functions in order
//for the function to be used.
