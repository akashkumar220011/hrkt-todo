/*
*Todo{
    title: string;
    des: string;
    completed: boolean
} 
    
*/
const mongoose = require('mongoose');

// mongodb+srv://krakash1022:9572975665@cluster0.0n57yxv.mongodb.net/
mongoose.connect("mongodb+srv://krakash1022:9572975665@cluster0.0n57yxv.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    descrption: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}