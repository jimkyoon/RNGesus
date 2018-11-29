// require the model
const Session = require('../models/sessionModel');
// cookie controller for setting cookies
const cookieController = require('../util/cookieController');

const sessionController = {};

// load the main page
sessionController.index = (req, res, next) => {
  cookieController.setCookie(req, res);
  res.status(200).json({ "hello": "world" });
};

sessionController.startSession = async (req, res, next) => {
  const newSession = new Session({ cookieId: res.locals.id });
  await newSession.save();
};

sessionController.random = (req, res, next) => {

};

module.exports = sessionController;
