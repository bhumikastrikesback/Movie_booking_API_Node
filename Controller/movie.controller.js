const Movie = require('../models/movie.model');
const movieservice = require('../services/movie.service');
const {sucessResponseBody, responseBody} = require('../utils/responsebody')

const createMovie = async (req, res) => {
    try {
        const movie = await movieservice.createMovie(req.body);
        sucessResponseBody.body = movie;
        successResponseBody.message = "sucessfully created the movie";

    
        return res.status(201).json(sucessResponseBody);
    } catch(err) {
        console.log(err);
        return res.status(500).json(responseBody);
    }
};

const deleteMovie = async (req, res) => {
    try {
        const response = await movieservice.deleteMovie(req.params.id);
        sucessResponseBody.data = response;
        successResponseBody.message = "sucessfully delted the movie";
        return res.status(200).json(sucessResponseBody);
    } catch (err) {
        console.log(err);
        return res.status(500).json(responseBody);
    }
}

const getMovie = async(req, res) => {
    try {
        const response = await movieservice.getMovieById(req.params.id);
        
        if(response.err) {
            responseBody.err = response.err;
            return res.status(response.code).json(responseBody);
        }
        

        sucessResponseBody.data = response;
        return res.status(200).json(sucessResponseBody); 
        
    } catch(err) {
        console.log(err);
        responseBody.err = err;
        return res.status(500).json(responseBody); 
    }
}

module.exports = {
    createMovie,
    deleteMovie,
    getMovie
}