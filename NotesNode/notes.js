console.log('Starting notes.js');

//console.log(module);

//what we need the most is exports.
module.exports.age = 25;

//we can ofc store functions
module.exports.addNote = () => {
  console.log('addNote');
  return 'New Note';
};

module.exports.add = (a,b) => {
  return a + b;
};
