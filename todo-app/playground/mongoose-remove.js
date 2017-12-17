console.log('Starting mongoose-remove...');

const {ObjectId} = require('mongodb');

const {mongoose} = require('./../servers/db/mongoose');
const {Todo} = require('./../servers/models/todo');
const {User} = require('./../servers/models/user');

let id = '5a364c96da04d2b41b97844d';

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({_id: id}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove(id).then((result) => {
    console.log(result);
});