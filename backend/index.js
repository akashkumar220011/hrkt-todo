const express = require('express');
const { createTodo, updateTodo } = require('./types');

const app = express()
const port = 3000

app.use(express.json());

app.post('/todo', function(req, res){
     const createPayload = req.body;
     const parsedPayload = createTodo.safeParse(createPayload);
     if(!parsedPayload){
        res.status(411).json({
            msg: "You sent the wrong  inputs",
        })
        return;
     }
     //put it in mongodb
})
app.get('/todos', function(req, res){

})
app.put('/completed', function(req, res){
    const  updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload){
        res.status(411).json({
            msg: "You sent the wrong  inputs",
        })
        return;
    }
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))