// app.js

var express = require('express');
var bodyParser = require('body-parser');

var post = require('./routes/post'); // Imports routes for the posts
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://Lena:1234@acebook-hcwhl.mongodb.net/test?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/posts', post);

module.exports = app