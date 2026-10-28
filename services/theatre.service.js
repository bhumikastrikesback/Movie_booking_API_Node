const { model } = require("mongoose");
const Theatre = require("../models/theatre.model");

/*
    params data => object containing details of the theatre to be created
    returns => object with the new theatre details
*/ 

const createTheatre = async(data) => {
    try {
        const response = await Theatre.create(data);
        return response;
    } catch(error) {
        if(error.name == "ValidationError") {
            let err = {};
            Object.keys(error.errors).forEach((key) => {
                err[key] = error.errors[key].message;
            });
            return {err: err, code: 422};
        }
        console.log(error);
        throw err;
    }
    
}
 

const getTheatre = async (id) => {
    try {
        const response = await Theatre.findById(id);
        if(! response) {
            return {
                err: "No theatre found for the given id",
                code: 404
            }
        }
        return response;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const getAllTheatres = async () => {
    try {
        const response = await Theatre.find({});
        return response;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

/*
    param id => the unique id using which we can identify the theatres to be deleted
    returns => deleted theatre object
*/ 

const deleteTheatre = async(id) => {
    try {
        const response = await Theatre.findByIdAndDelete(id);
        if(!response) {
            return {
                err: "no record of theatre",
                code: 404
            }
        }
        return response;
    } catch(error) {
        console.log(error);
        throw error;
    }
}
module.exports = {
    createTheatre,
    getTheatre,
    getAllTheatres,
    deleteTheatre
}