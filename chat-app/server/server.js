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

    socket.emit('newMessage', {
        from: 'admin',
        text: 'welcome to chat app',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'admin',
        text: 'new user joined',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);

        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('disconnected from client');
    });
});




server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
