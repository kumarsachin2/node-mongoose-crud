const express = require('express');
const signupRoute = require('./routes/api');
const bodyParser = require('body-parser');
const error = require('./utils/errors');
const app = express();


const mongoose = require("mongoose");
const db_uri = require('./config').MONGODB_URI
const PORT = require('./config').PORT


app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/user', signupRoute);
app.use(error.error500);


mongoose.connect(db_uri)
    .then(result => {
        console.log('connect success');
        app.listen(PORT);
    })
    .catch(err => {
        console.log(err);
    });
