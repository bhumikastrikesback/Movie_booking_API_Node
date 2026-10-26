const {errorResponseBody} = require("../utils/responsebody");

const validateTheatreCreateRequest = async (req, res, next) => {

    //validate the name of the theatre
    if(!req.body.name) {
        errorResponseBody.err = "The name of the theatre is not present in request";
        return res.status(400).json(errorResponseBody);
    } 

    //validate for the presence of pincode
    if(!req.body.pincode) {
        errorResponseBody.err = "The pincode of the theatre is not present in request";
        return res.status(400).json(errorResponseBody);
    }

    //validate for the presence of city
    if(!req.body.city) {
        errorResponseBody.err = "The city of theatre is not present";
        return res.status(400).json(errorResponseBody);
    }

    next();
}

module.exports = {
    validateTheatreCreateRequest
}