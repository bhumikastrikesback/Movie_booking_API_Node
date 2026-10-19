const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

const routes = require('./Routes/movie.routes');

env.config();
const app = express(); //express app object

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app); 

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
        console.log("unable to connect");
    }
});