const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Express', (done) => {
    request(app).get('/').expect('Express', done);
  });
});