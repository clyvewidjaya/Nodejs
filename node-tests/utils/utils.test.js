const expect = require('expect');
const utils = require('./utils');


describe('Utils', () => {

  describe('#Non async', () => {
    it('Should add two numbers',() => {
      var res = utils.add(33,11);

      expect(res).toBe(44,`Expected 44, but got ${res}`).toBeA('number');
    });//it takes 2 arguments

    it('Should square a number', () => {
      var result = utils.square(7);

      expect(result).toBe(49,`Expected 49, but got ${result}`).toBeA('number');
    });

    it('Should expect some values', () => {
      //expect(12).toNotBe(12); work great for number, string, booleans, but not arrays, objects, not really
      //expect({name: 'Clyve'}).toEqual({name: 'Clyve'}); //better to use toEqual for arrays and objects
      //expect([2,3,4]).toInclude(5);
      //expect([2,3,4]).toExclude(1);
      /*
      expect({
        name: 'Clyve',
        age: 20,
        location: 'Oshawa'
      }).toInclude({age: 20
      })
      */
      expect({
        name: 'Clyve',
        age: 20,
        location: 'Oshawa'
      }).toExclude({age: 21
      })
    });

    it('Should set first and last names', () => {
      var user = {location: 'Oshawa', age: 20};
      var result = utils.setName(user,'Clyve Widjaya');
      expect(user).toInclude({
        firstName: 'Clyve',
        lastName: 'Widjaya'
      });
    });
  });

  describe('#Async', () => {
    //mocha doesnt know that it is async function unless you give the 'done' argument
    //and dont forget to give done();
    it('Should async add 2 numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });

    it('Should async square 1 number', (done) => {
      utils.asyncSquare(7, (sq) => {
        expect(sq).toBe(49).toBeA('number');
        done();
      });
    });
    //nodemon for testing
    //nodemon --exec 'npm test'
    //or we just added test-watch in package.json
    //and type npm run test-watch
  });

});//takes 2 args, name and callback func
