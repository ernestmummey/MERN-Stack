const mongoose = require("mongoose");


const JokesSchema =  new mongoose.Schema({
    setup: { 
        type: String,
        required:[true, "All jokes need a setup"],
        minlength: [10, "Need to be at least 10 characters long to enter this joke"]
    },
    punchline: { 
        type: String,
        required: [true, "What is a joke without a punchline ???"],
        minlength: [3, "Need to be at least 3 characters long to enter a punchline"]
    },
})


const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports = Jokes;