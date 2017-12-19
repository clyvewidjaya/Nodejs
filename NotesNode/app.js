console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

//console.log(process.argv);
var command = process.argv[2];
console.log('Command: ' + command);

if (command === 'add'){
  console.log('Adding new note');
} else if (command === 'list'){
  console.log('Listing all notes');
} else if (command === 'read'){
  console.log('Fetching note => ' + process.argv[3])
} else if (command === 'remove'){
  console.log('Removing note => '+ process.argv[3])
} else {
  console.log('Command not recognized');
}
