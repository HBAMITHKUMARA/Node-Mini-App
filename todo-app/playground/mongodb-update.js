console.log('Starting mongodb-connect...');

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, db) => {
    if(err) {
        return console.log('unable to connect to mongoDB server');
    }
    console.log('connected to mongoDB server');

    let col_todos = db.collection('todos');

    col_todos.findOneAndUpdate(
        {
            text: 'something to do'
        },
        {
            $set: {
                completed: true
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    let col_users = db.collection('users');

    col_users.findOneAndUpdate(
        {
            name: 'aminem'
        },
        {
            $inc: {
                age: 5
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    db.close();
});