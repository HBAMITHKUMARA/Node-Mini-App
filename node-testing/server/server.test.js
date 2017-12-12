console.log('Starting server-test...');

const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('server tests', () => {

    it('should return hello world response', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('hello world')
            .end(done);
    });

    it('should return user object response', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'ami',
                    age: 23
                });
            })
            .end(done);
    });

    it('should return page not found response', (done) => {
        request(app)
            .get('/test')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'page not found'
                });
            })
            .end(done);
    });

});