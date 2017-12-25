console.log('Starting public/js/index...');

let socket = io();

socket.on('connect', function() {
    console.log('connected to server');

    socket.emit('createEmail', {
        to: 'example@test.com',
        text: 'hey, this is example.'
    });
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newEmail', function(email) {
    console.log('new email', email);
});