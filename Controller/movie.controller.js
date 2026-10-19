const movie = require('../models/movie.model');

const createMovie = async (req, res) => {
    try {
        const Movie = await movie.create(req.body);
        return res.status(201).json({
            sucess: true,
            error: {},
            data: movie,
            message: "sucessfully created a new movie"
        })
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            sucess: true,
            error: err,
            data: {},
            messae: "something went wrong"
            
        });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const response = await movie.deleteOne({
            _id: req.params.movieId
        });
        return res.status(200).json({
            success: true,
            error: {},
            message: 'Successfully deleted the movie',
            data: response
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            error: err,
            message: 'Something went wrong',
            data: {}
        });
    }
}

module.exports = {
    createMovie,
    deleteMovie
}