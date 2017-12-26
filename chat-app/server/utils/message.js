console.log('Starting utils/message...');

let generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    }
};

module.exports = {
    generateMessage
};