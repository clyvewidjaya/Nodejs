//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

//console.log(process.argv);
const argv = yargs.argv;
var command = argv._[0];
//this because the command (the add, list, etc), will be in
//an array under then name of _ .
//ex.
//node app.js read --title "Clyvee"
//yargs will be
//yargs { _:['read'], title: 'Clyvee', '$0': 'app.js'}
console.log('Command: ' + command);

if (command === 'add'){
  //console.log('Adding new note');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
  //console.log('Listing all notes');
  notes.getAll();
} else if (command === 'read'){
  //console.log('Fetching note => ' + process.argv[3])
  notes.getNote(argv.title);
} else if (command === 'remove'){
  //console.log('Removing note => '+ process.argv[3])
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
