const cookieController = require('../util/cookieController');
const sessionController = require('../controllers/sessionController');

const User = require('../models/userModel');

const userController = {};

userController.signup = (req, res, next) => {
  const { username, password } = req.body;
  const newUser = new User({ username: username, password: password });
  newUser.save((err, user) => {
    if (err) return res.status(400).json(err);
    res.locals.id = user._id;
    cookieController.setSSIDCookie(req, res);
    sessionController.startSession(req, res);
    return res.status(200).json(user);
  });
};

userController.login = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username: username }, (err, result) => {
    if (result === null) {
      return res.status(400).json({ message: 'No user was found' });
    }
    result.comparePassword(password, function (err, isMatch) {
      if (err) return res.status(400).json({ loginErr: err });
      if (isMatch) {
        res.locals.id = result._id;
        cookieController.setSSIDCookie(req, res);
        sessionController.startSession(req, res);
        return res.status(200).json({ message: 'You are signed on!' });
      } else {
        return res.json({ error: 'Password did not match!'});
      }
    });
  });
};

userController.getHistory = (req, res, next) => {

};

module.exports = userController;
