const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
//app.__set__ and app.__get__ we got those functions as we do rewire

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  //it('Should call the spy correctly', () => {
  //  var spy = expect.createSpy();
  //  spy('Clyve', 20);
  //  expect(spy).toHaveBeenCalledWith('Clyve', 20);
  //});

  it('Should call saveUser with user object', () => {
    var email = 'clyve.widjaya@uoit.net';
    var pass = 'qwerty';
    app.handleSignup(email, pass);
    expect(db.saveUser).toHaveBeenCalledWith({email, pass});
  });
});
