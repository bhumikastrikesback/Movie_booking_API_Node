const movieController = require('../Controller/movie.controller');

const routes = (app) => {
    app.post('/mba/api/v1/movies', movieController.createMovie);
}


module.exports = routes;