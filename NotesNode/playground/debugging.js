var person = {
  name: 'Clyve'
};

//debugger;//for flag so that if we have long code we dont have to press n until that line.
person.age = 20;
debugger;
person.name = 'Mike';
console.log(person); // Mike 20
//node inspect appname.js
//n for next
//c for continue
//repl

//to debug from chrome tool
//node --inspect-brk playground/debugging.js
//then go to chrome
//chrome://inspect
