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

module.exports = {
    createMovie
}