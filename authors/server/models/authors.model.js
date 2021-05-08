const mongoose = require("mongoose");


const AuthorsSchema =  new mongoose.Schema({
    author: { 
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "must be at least 3 characters"]
    }})
        


const Authors = mongoose.model('Authors', AuthorsSchema);

module.exports = Authors;