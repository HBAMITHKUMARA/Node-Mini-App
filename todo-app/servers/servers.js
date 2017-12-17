console.log('Starting server...');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then((docs) => {
            res.send(docs);
        }, (err) => {
            res.status(400).send(err);
        });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    let isValid = ObjectId.isValid(id);
    if(!isValid) {
        return res.status(404).send({error: 'invalid id'});
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send({error: 'id not found'});
        }
        res.send({todo});
    }, (err) => {
        res.status(400).send({});
    });
});

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;

    let isValid = ObjectId.isValid(id);
    if(!isValid) {
        return res.status(404).send({error: 'invalid id'});
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            return res.status(404).send({error: 'id not found'});
        }
        res.send({todo});
    }).catch((err) => {
        res.status(400).send({});
    });
});


app.patch('/todos/:id', (req, res) =>{
    let id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);

    let isValid = ObjectId.isValid(id);
    if(!isValid) {
        return res.status(404).send({error: 'invalid id'});
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    }else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(
        id,
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



app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {
    app
};