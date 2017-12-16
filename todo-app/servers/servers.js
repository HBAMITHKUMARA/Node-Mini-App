console.log('Starting server...');

let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
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

// app.get('/todos', () =>{
//
// });
//
// app.post('/todos', () =>{
//
// });
//
// app.post('/todos', () =>{
//
// });



app.listen(3000, () => {
    console.log('server is up and listening to port 3000')
});