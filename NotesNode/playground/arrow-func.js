var square = x => x*x;
console.log(square(8));

//for one variable pass you dont have to use ()
//but for no pass and one or more, we haveto ouse ()

var user = {
  name: 'Clyve',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }, //wont work, will print Hi Undefined
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  } //will work
};

user.sayHiAlt(5,6,7);
