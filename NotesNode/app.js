//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const readline = require('readline');
const notes = require('./notes.js');

//console.log(process.argv);
const titleOptions = {describe: 'Title of note', demand: true, alias: 't'};
const bodyOptions = {describe: 'Note Body', demand: true, alias: 'b'};

const argv = yargs
  .command('add','Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all Notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Delete a note',{
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];
//this because the command (the add, list, etc), will be in
//an array under then name of _ .
//ex.
//node app.js read --title "Clyvee"
//yargs will be
//yargs { _:['read'], title: 'Clyvee', '$0': 'app.js'}
//console.log('Command: ' + command);
if (command === 'add'){
  //console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if (_.isUndefined(note)){
    console.log(`Note ${argv.title} exists!`);
    const r1 = readline.createInterface({input: process.stdin, output: process.stdout});
    r1.question(`Do you want to edit ${argv.title}? (yes or no)? => `, (answer) => {
      if (answer === 'yes'){
        r1.on('pause',() => {
          notes.editNote(argv.title);
        });
      } else if (answer === 'no'){
        console.log("Goodbye!");
      } else {
        console.log("Only answer with yes or no you dumbdumb");
      }
    r1.clearLine();
    r1.close();
    });
  } else {
    console.log('Note Added!');
    notes.logNote(note);
  }
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  var note = notes.getNote(argv.title);
  if (note){
    notes.logNote(note);
  } else {
    console.log(`Note "${argv.title}" not found!`);
  }
} else if (command === 'remove'){
  var message = notes.removeNote(argv.title) ? 'Note Removed!' : 'Note not exists';
  console.log(message);
} else if (command === 'edit'){

} else {
  console.log('Command not recognized');
}
