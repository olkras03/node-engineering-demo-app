// app.js

var express = require('express');
var bodyParser = require('body-parser');

var post = require('./routes/post'); // Imports routes for the posts
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://acebook:1t24zqiOohDOEKGR@acebook-node-ugamv.mongodb.net/test?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/posts', post);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
