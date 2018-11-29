// require the model for user
const User = require('../models/userModel');
const cookieController = require('../util/cookieController');
const sessionController = require('../controllers/sessionController');

const userController = {};

userController.signup = async (req, res, next) => {
  const { username, password } = req.body;
  const newUser = new User({ username: username, password: password });
  await newUser.save((err, user) => {
    res.locals.id = user._id;
    cookieController.setSSIDCookie(req, res);
    sessionController.startSession(req, res);
  });
};

userController.login = (req, res, next) => {

};

userController.getHistory = (req, res, next) => {

};

module.exports = userController;
