const badRequestResponse = {
    success: false,
    err: "",
    data: {},
    message: "Malformed request | Bad request"
}
const validateMovieCreateRequest = async (req, res, next) => {
    //validate the movie name
    if(!req.body.name) {
        badRequestResponse.err = "The name of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    //validate the movie description
    if(!req.body.description) {
        badRequestResponse.err = "The description of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    //validate the casts
    if(!req.body.casts || !(req.body.casts instanceof Array) || req.body.casts <= 0) {
        badRequestResponse.err = "The casts are missing in the req";
        return res.status(400).json(badRequestResponse);
    }

    //validate the movie trailer url
    if(!req.body.trailerurl) {
        badRequestResponse.err = "The trailer url is not present in the movie req";
        return res.status(400).json(badRequestResponse);
    }

    //validate the release date of the movie
    if(!req.body.releaseDate) {
        badRequestResponse.err = "The releaseDate is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    //validate director of the movie
    if(!req.body.director) {
        badRequestResponse.err = "The Director is not mention on the request";
        return res.status(400).json(badRequestResponse);
    }

    next();
} 

module.exports = {
    validateMovieCreateRequest
}