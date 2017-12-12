console.log('Starting util.test...');

const expect = require('expect');

const utils = require('./utils');

describe('utils tests', () => {

    describe('add test', () => {
        it('should add two numbers', () => {
            let res = utils.add(6, 8);
            expect(res).toBe(14).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(6, 5, (sum) => {
                expect(sum).toBe(11).toBeA('number');
                done();
            });
        });
    });

    it('should return a square of a number', () => {
        let res = utils.square(6);
        expect(res).toBe(36).toBeA('number');
    });

    it('should expect some values', () => {
        expect(36).toBe(36).toBeA('number');
        expect(36).toNotBe(3).toNotBeA('string');
        expect({name: 'ami'}).toEqual({name: 'ami'});
        expect({name: 'amith'}).toNotEqual({name: 'ami'});
        expect([2,4,6,8]).toInclude(4);
        expect([2,4,6,8]).toNotInclude(5);
        expect({
            name: 'ami',
            id: 2463,
            location: 'dvg'
        }).toInclude({id: 2463}).toExclude({name: 'dsk'});
    });

    it('should test setName feature', () => {
        let user = {
            id: 2463,
            location: 'dvg'
        };
        let res = utils.setName(user, 'amithkumar hb');
        expect(res).toInclude({firstName: 'amithkumar', lastName: 'hb'});
    });
});