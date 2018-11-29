// app.js
const express = require('express');
const bodyParser = require('body-parser');
const email = require('./routes/email.route'); // Imports routes for the emails

// initialize our express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/emails', email);
app.use('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

var port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
