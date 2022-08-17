const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Express', (done) => {
    request(app).get('/').expect('Express', done);
  });
});

describe('GET /users', () => {
  it('responds with user', (done) => {
    request(app).get('/users').expect('user', done);
  });
});