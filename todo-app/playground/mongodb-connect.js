console.log('Starting mongodb-connect...');

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, db) => {
    if(err) {
        return console.log('unable to connect to mongoDB server');
    }
    console.log('connected to mongoDB server');

    let col_todos = db.collection('todos');

    col_todos.insertOne({
        text: 'something to do',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('unable to insert todo', err);
        }
        console.log('res', result.ops);
    });

    let col_users = db.collection('users');

    col_users.insertOne({
        name: 'aminem',
        age: 22,
        location: 'dvg'
    }, (err, result) => {
        if(err) {
            return console.log('unable to insert users', err);
        }
        console.log('res', result.ops);
    });

    db.close();
});