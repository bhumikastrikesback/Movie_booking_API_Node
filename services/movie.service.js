const Movie = require('../models/movie.model');

/*
    param data => object containing details of the new movie to be created
    returns => return the new movie object created
*/

const createMovie = async(data) => {
    try {
        const movie = await Movie.create(data);
        return movie;
    } catch(error) {
        if(error.name == "ValidationError") {
            let err = {};
            Object.keys(error.errors).forEach((key) => {
                err[key] = error.errors[key].message;
            });
            return {err: err, code: 422};
        } else {
            throw error;
        }
    }
}

/*
    params id => id wich will be used to identify the movie to be deleted
    returns => the object containing the details of the movie deleted
*/ 
const deleteMovie = async(id) => {
    try {
        const response = await Movie.findByIdAndDelete(id);
        if(!response) {
            return {
                err: "No movie record found for the id provided",
                code: 404
            }
        }
        return response;
    } catch(error) {
        console.log(error);
        throw error;
    }
    
}
// param id => id which will be used to identify the movie to be fetched
// return => object containing movie fetched
const getMovieById = async(id) => {
    const movie = await Movie.findById(id);
    if(!movie) {
        return {
            err: "No movie found for the corresponding id",
            code: 404
        }
    };

    return movie;
}
/*
    param id => id which will be used to identify the movie to be updated
    data => object that contains actual data which is to be update
    return => returns the new updated movie details 
*/ 

const updateMovie = async(id, data) => {
    try {
        const movie = await Movie.findByIdAndUpdate(id, data, {new: true ,runValidators: true});
        return movie;
    } catch(error) {
        if(error.name == "ValidationError") {
            let err = {};
            Object.keys(error.errors).forEach((key) => {
                err[key] = error.errors[key].message;
            });
            return {err: err, code: 422};
        } else {
            throw error;
        }
    }
    
}

/*
    filter => filter will help us in filtering out data based on the conditional
    returns => returns an object containing all the movies fetched based on the filter
*/ 

const fetchMovies = async(filter) => {
    let query = {};
    if(filter.name) {
        query.name = filter.name;
    }
    let movies = await Movie.find(query);
    if(movies.length === 0) {
        return {
            err: "Not able to find queried movies",
            code: 404
        }
    }
    
    return movies; 
}

module.exports = {
    createMovie,
    deleteMovie,
    updateMovie,
    getMovieById,
    fetchMovies
}