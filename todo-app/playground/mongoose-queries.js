console.log('Starting mongoose-queries...');

const {ObjectId} = require('mongodb');

const {mongoose} = require('./../servers/db/mongoose');
const {Todo} = require('./../servers/models/todo');
const {User} = require('./../servers/models/user');

let id = '5a357b450fa326c80e7fe9b0';

if(!ObjectId.isValid(id)){
    console.log('id is not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('todos: ', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo:  ', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if(!todo){
//         console.log('id not found');
//     }
//     console.log('todo:  ', todo);
// });





id = '5a352343642dd2300abaa373';

User.find().then((users) => {
    console.log('users: ', users);
});

User.findOne({
    _id: id
}).then((user) => {
    console.log('user: ', user);
});

User.findById(id)
.then((user) => {
    if(!user) {
        return console.log('unable to find user');
    }
    console.log('user: ', user);
})
.catch((err) => {
    console.log('err: ', err);
});