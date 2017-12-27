console.log('Starting utils/message-test...');

const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', (done) => {
        let from = 'ami';
        let text = 'hi!! this is ami';
        let res = generateMessage(from, text);

        expect(typeof res.createdAt).toBe('number');
        expect(res).toMatchObject({
            from,
            text
        });
        done();
    })
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', (done) => {
        let from = 'ami';
        let latitude = 1;
        let longitude = 2;
        let res = generateLocationMessage(from, latitude, longitude);
        expect(typeof res.createdAt).toBe('number');
        expect(res).toMatchObject({
            from,
            url: `https://www.google.com/maps?q=${latitude},${longitude}`
        });
        done();
    });
});