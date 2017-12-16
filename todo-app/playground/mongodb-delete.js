console.log('Starting mongodb-delete...');

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, db) => {
    if(err) {
        return console.log('unable to connect to mongoDB server');
    }
    console.log('connected to mongoDB server');

    let col_todos = db.collection('todos');

    // delete many
    // col_todos.deleteMany({text: 'something to do'}).then((result) => {
    //     console.log(`result:    ${result}`);
    // });

    // delete one
    // col_todos.deleteOne({text: 'something to do'}).then((result) => {
    //     console.log(`result:    ${result}`);
    // });

    // find one and delete
    // col_todos.findOneAndDelete({text: 'something to do'}).then((result) => {
    //     console.log(`result:    `, JSON.stringify(result, undefined, 2));
    // });





    let col_users = db.collection('users');

    // delete many
    col_users.deleteMany({name: 'aminem'}).then((result) => {
        console.log(`result:    ${result}`);
    });

    // delete one
    // col_users.deleteOne({name: 'aminem'}).then((result) => {
    //     console.log(`result:    ${result}`);
    // });

    // find one and delete
    // col_users.findOneAndDelete({name: 'aminem'}).then((result) => {
    //     console.log(`result:    `, JSON.stringify(result, undefined, 2));
    // });

    db.close();

});