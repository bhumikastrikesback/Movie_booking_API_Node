const movieController = require('../Controller/movie.controller');

const routes = (app) => {
    app.post('/mba/api/v1/movies', movieController.createMovie);
    app.delete('/mba/api/v1/movies/:movieId', movieController.deleteMovie);
}


module.exports = routes;