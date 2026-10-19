const mongoose = require('mogoose');

//define the schema of the movie resource to be stored in the db

const movieSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    casts: {
        type: [String],
        required: true
    },
    trailerurl: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true,
        default: "English"
    },
    releaseDate: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releaseStatus: {
        type: String,
        required: true,
        default: "RELEASED"
    }
}, {timestamps: true});

const Movie = mongoose.model('Movie', movieSchema); // creates a new model

module.exports = Movie; //returning the model