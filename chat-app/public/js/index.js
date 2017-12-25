console.log('Starting public/js/index...');

let socket = io();

socket.on('connect', function() {
    console.log('connected to server');

    socket.emit('createMessage', {
        to: 'ami',
        text: 'hey, this is ami.'
    });
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});