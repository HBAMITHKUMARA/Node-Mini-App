console.log('Starting mongodb-find...');

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, db) => {
    if(err) {
        return console.log('unable to connect to mongoDB server');
    }
    console.log('connected to mongoDB server');

    // fetch all documents
    let col_todos = db.collection('todos');

    col_todos.find().toArray().then((docs) => {
        console.log('todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        return console.log('unable to fetch todos', err);
    });

    // fetch all documents iff completed: true
    col_todos.find({completed: true}).toArray().then((docs) => {
        console.log('todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        return console.log('unable to fetch todos', err);
    });

    // count todos documents
    col_todos.find().count().then((count) => {
        console.log(`todos count: ${count}`);
    }, (err) => {
        return console.log('unable to fetch todos', err);
    });




    let col_users = db.collection('users');

    // fetch all documents
    col_users.find().toArray().then((docs) => {
        console.log('users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        return console.log('unable to fetch users', err);
    });

    // fetch all documents iff name: ami
    col_users.find({name: 'aminem'}).toArray().then((docs) => {
        console.log('users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        return console.log('unable to fetch users', err);
    });

    // count users documents
    col_users.find().count().then((count) => {
        console.log(`users count: ${count}`);
    }, (err) => {
        return console.log('unable to fetch users', err);
    });

    db.close();

});