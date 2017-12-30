console.log('Starting server...');

require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
let {authenticate} = require('./middleware/authenticate');

let app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', authenticate, (req, res) => {
    let todo = new Todo({
        text: req.body.text,
        _creator: req.user._id
    });

    todo.save()
        .then((docs) => {
            res.send(docs);
        }, (err) => {
            res.status(400).send(err);
        });
});

app.get('/todos', authenticate, (req, res) => {
    Todo.find({
        _creator: req.user._id
    }).then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', authenticate, (req, res) => {
    let id = req.params.id;

    let isValid = ObjectID.isValid(id);
    if(!isValid) {
        return res.status(404).send({error: 'invalid id'});
    }

    Todo.findOne({
        _id: id,
        _creator: req.user._id
    }).then((todo) => {
        if(!todo) {
            return res.status(404).send({error: 'id not found'});
        }
        res.send({todo});
    }, (err) => {
        res.status(400).send({});
    });
});

app.delete('/todos/:id', authenticate, async (req, res) => {
    const id = req.params.id;
    const isValid = ObjectID.isValid(id);
    if(!isValid) {
        return res.status(404).send({error: 'invalid id'});
    }
    try{
        const todo = await Todo.findOneAndRemove({_id: id, _creator: req.user._id});
        if(!todo) {
            return res.status(404).send({error: 'id not found'});
        }
        res.send({todo});
    }catch(e) {
        res.status(400).send({});
    };
});

app.patch('/todos/:id', authenticate, (req, res) =>{
    let id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);

    let isValid = ObjectID.isValid(id);
    if(!isValid) {
        return res.status(404).send({error: 'invalid id'});
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    }else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findOneAndUpdate(
        {
            _id: id,
            _creator: req.user._id
        },
        {$set: body},
        {new: true}
        ).then((todo) => {
            if(!todo) {
                return res.status(404).send({error: 'id not found'});
            }
            res.send({todo});
    }).catch((err) => {
        res.status(400).send({});
    });
});


app.post('/users', async (req, res) => {
    try{
        const body = _.pick(req.body, ['email', 'password']);
        const user = new User(body);
        await user.save();
        const token = user.generateAuthToken();
        res.header('x-auth', token).send(user);
    }catch(e) {
        res.status(400).send(e);
    }
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

app.post('/users/login', async (req, res) => {
    try{
        const body = _.pick(req.body, ['email', 'password']);
        const user = await User.findByCredentials(body.email, body.password);
        const token = await user.generateAuthToken();
        res.header('x-auth', token).send(user);
    }catch(e) {
        res.status(400).send(e);
    }
});

app.delete('/users/me/token', authenticate, async (req, res) => {
    try{
        await req.user.removeToken(req.token);
        res.status(200).send();
    }catch(e) {
        res.status(400).send();
    }
});



app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {
    app
};