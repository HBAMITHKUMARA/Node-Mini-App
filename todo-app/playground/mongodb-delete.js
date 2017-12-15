console.log('Starting mongodb-delete...');

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, db) => {
    if(err) {
        return console.log('unable to connect to mongoDB server');
    }
    console.log('connected to mongoDB server');

    db.close();

});