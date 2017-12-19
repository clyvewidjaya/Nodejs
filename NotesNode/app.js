console.log('Starting app.js');

const fs = require('fs'); //const is like val in scala. we normally use var, const n var, once they are declared
                          //they cannot be changed.
                          //require param is only 1. this case we put fs

const os = require('os'); //this case we need os.
const notes = require('./notes.js');

//require is used to load in modules example from nodejs.org/api or other files or import packages
//something like import in java.

//fs.appendFile('greetings.txt','Hello World');
//wont work anymore for version 7 and up

var user = os.userInfo();
//console.log(user);

//option 1
/*
fs.appendFile('greetings.txt','Hello ' + user.username + '!\n' + user.homedir, function(err){
  if (err) {
    console.log('Unable to write to file');
  }
}); //this will catch error and print them to the terminal.
*/
//option 2
//fs.appendFileSync('greetings.txt','Hello Clyve'); //better to use option 1

//template string use ``
/*
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old.`, function(err){
  if (err) {
    console.log('Unable to write to file');
  }
}); //similar like scala.
*/

var res = notes.addNote();
console.log(res);

var sum = notes.add(1,2);
console.log(sum);
