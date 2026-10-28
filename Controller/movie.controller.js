const Movie = require('../models/movie.model');
const movieservice = require('../services/movie.service');
const {successResponseBody, errorResponseBody} = require('../utils/responsebody')

const createMovie = async (req, res) => {
    try {
        const response = await movieservice.createMovie(req.body);
        
        if(response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.message = "validation failed on few parameters of response body";
            return res.status(response.code).json(errorResponseBody);
        }
        
        successResponseBody.data = response; 
        successResponseBody.message = "successfully created the movie";
    
        return res.status(201).json(successResponseBody);
    } catch(err) {
        console.log(err);
        return res.status(500).json(errorResponseBody);
    }
};

const deleteMovie = async (req, res) => {
    try {
        const response = await movieservice.deleteMovie(req.params.id);
        if(response.err) {
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        successResponseBody.message = "successfully deleted the movie";
        return res.status(200).json(successResponseBody);
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

        successResponseBody.data = response;
        return res.status(200).json(successResponseBody); 
        
    } catch(err) {
        console.log(err);
        errorResponseBody.err = err;
        return res.status(500).json(errorResponseBody); 
    }
}

const updateMovie = async(req, res) =>{
    try {
        const response = await movieservice.updateMovie(req.params.id, req.body);
        sucessResponseBody.data = response;
        if(response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.message = "The updates we are trying to apply doesnt validate the schema";
            return res.status(response.code).json(errorResponseBody);
        }
        return res.status(201).json(successResponseBody);
    } catch(err) {
        console.log(err);
        errorResponseBody.err = err;
        return res.status(500).json(errorResponseBody);
    }
}

const getMovies = async(req, res) => {
    try{
       const response = await movieservice.fetchMovies(req.query);
       if(response.err) {
        errorResponseBody.err = response.err;
        return res.status(response.code || 404).json(errorResponseBody);
       }
       successResponseBody.data = response;
       return res.status(200).json(successResponseBody);
    } catch(error) {
        console.log(error);
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    createMovie,
    deleteMovie,
    updateMovie,
    getMovies,
    getMovie
}