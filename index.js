const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

const movieRoutes = require('./Routes/movie.routes');
const theatreRoutes = require("./Routes/theatre.routes");

env.config();
const app = express(); //express app object

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

movieRoutes(app); 
theatreRoutes(app); //invoking theatres routes

app.get('/home', (req, res) => {
    return res.json({
        success: true
    })
})

app.listen(process.env.PORT, async () => {
    console.log(`server started on port ${process.env.PORT}`);
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("successfully connected to database");
    } catch(err) {
        console.log("unable to connect", err);
    }
});