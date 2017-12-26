console.log('Starting utils/message-test...');

const expect = require('expect');

const {generateMessage} = require('./message');

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