const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;
describe('Server', () => {
  describe('#GET /', () => {
    it('Should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('#GET /users', () => {
    it('Should return an array of names', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Agus Widjaya',
            age: 55
          });
        })
        .end(done);
    });
  });
});
