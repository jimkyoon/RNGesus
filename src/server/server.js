// require modules
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// require controllers
const sessionController = require('./controllers/sessionController');
const userController = require('./controllers/userController');
const logicController = require('./controllers/logicController');

// assign app to express
const app = express();

// port number
const PORT = 3000;

// app uses
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// database connection
// dotenv for database info
require('dotenv').config();
// mongoose connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true },
  (err) => {
    if (err) console.log(err);
    else console.log('Connected to the database!');
  },
);

// routes
// main page
app.get('/', sessionController.index);
// signup form sent here
app.post('/signup', userController.signup);
// login form sent here
app.post('/login', userController.login);

// random number generator
// coinflip
app.get('/random/coinflip', logicController.coinFlip);
// dice rolls
app.post('/random/dice', logicController.diceRoll);
// pick a random number
app.post('/random/picknum', logicController.pickANumber);
// lottery
app.post('/random/lotto', logicController.lottery);
// history
app.get('/history', userController.getHistory);

// start server with port
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Listening on PORT ${PORT}`);
});
