// require modules
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// require controllers
const sessionController = require('./controllers/sessionController');

// assign app to express
const app = express();

// port number
const PORT = 3000;

// app uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// database connection
// dotenv for database info
// require('dotenv').config();
// // mongoose connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true },
//   (err) => {
//     if (err) console.log(err);
//     else console.log('Connected to the database!');
//   },
// );

// routes
// main page
app.get('/', sessionController.mainPage);
// signup
// login
// random number generator
// history

// start server with port
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Listening on PORT ${PORT}`);
});
