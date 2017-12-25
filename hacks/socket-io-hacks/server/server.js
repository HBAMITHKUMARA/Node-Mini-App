console.log('Starting server...');

const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname + '/../public');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=> {
    console.log('new user connected');

    socket.emit('newEmail', {
        from: 'test@test.com',
        text: 'hey whats going on',
        createdAt: 1234
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });

    socket.on('disconnect', () => {
        console.log('disconnected from client');
    });
});




server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
