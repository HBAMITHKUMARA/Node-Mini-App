console.log('Starting mongodb-connect');

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, db) => {
    if(err) {
        return console.log('unable to connect to mongoDB server');
    }
    console.log('connected to mongoDB server');

    db.collection('todos').insertOne({
        text: 'somethind to do',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('unable to insert todo', err);
        }
        console.log('inserted to db', JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});