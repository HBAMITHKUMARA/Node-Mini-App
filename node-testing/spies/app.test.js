console.log('Starting app.test...');

const expect = require('expect');

it('should call spies correctly', () => {
        let spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    }
);