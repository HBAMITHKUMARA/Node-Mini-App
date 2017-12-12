console.log('Starting server...');

const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'ami',
            age: 23
        },
        {
            name: 'ram',
            age: 25
        },
        {
            name: 'gan',
            age: 25
        }]);
});

app.get('/*', (req, res) => {
    res.status(404).send({
        name: 'server app',
        error: 'page not found'
    });
});

app.listen(3000, () => {
    console.log('server is started and listening to port 3000');
});

module.exports = {
    app
};