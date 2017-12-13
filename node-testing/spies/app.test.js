console.log('Starting app.test...');

const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');


describe('spies', () => {
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call saveUser', () => {
        let email = 'test@gmail.com';
        let password = 'test';
        app.signUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

    it('should call spies correctly', () => {
            let spy = expect.createSpy();
            spy();
            expect(spy).toHaveBeenCalled();
            spy('test', 'test');
            expect(spy).toHaveBeenCalledWith('test', 'test');
        }
    );
});
