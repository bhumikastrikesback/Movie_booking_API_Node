const Movie = require('../models/movie.model');
const movieservice = require('../services/movie.service');
const {sucessResponseBody, errorResponseBody} = require('../utils/responsebody')

const createMovie = async (req, res) => {
    try {
        const response = await movieservice.createMovie(req.body);
        

        if(response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.message = "validation failed on few parameters of response body";
            return res.status(response.code).json(errorResponseBody);
        }
        
        sucessResponseBody.data = response; 
        sucessResponseBody.message = "successfully created the movie";
    
        return res.status(201).json(sucessResponseBody);
    } catch(err) {
        console.log(err);
        return res.status(500).json(errorResponseBody);
    }
};

const deleteMovie = async (req, res) => {
    try {
        const response = await movieservice.deleteMovie(req.params.id);
        sucessResponseBody.data = response;
        sucessResponseBody.message = "successfully deleted the movie";
        return res.status(200).json(sucessResponseBody);
    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponseBody);
    }
}

const getMovie = async(req, res) => {
    try {
        const response = await movieservice.getMovieById(req.params.id);
        
        if(response.err) {
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);
        }

        sucessResponseBody.data = response;
        return res.status(200).json(sucessResponseBody); 
        
    } catch(err) {
        console.log(err);
        errorResponseBody.err = err;
        return res.status(500).json(errorResponseBody); 
    }
}

module.exports = {
    createMovie,
    deleteMovie,
    getMovie
}