/*
*Todo{
    title: string;
    des: string;
    completed: boolean
} 
    
*/
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://akash19btcse006:r463qAhAREOuRHSy@cluster0.bsa8hal.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    descrption: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}