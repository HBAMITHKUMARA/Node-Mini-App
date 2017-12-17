console.log('Starting server...');

let express = require('express');
let bodyParser = require('body-parser');
let {ObjectId} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
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
        res.status(400).send(err);
    });
});


// app.post('/todos', () =>{
//
// });



app.listen(3000, () => {
    console.log('server is up and listening to port 3000')
});

module.exports = {
    app
};