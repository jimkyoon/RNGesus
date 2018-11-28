// require the model
const sessionModel = require('../models/sessionModel');
const cookieController = require('../util/cookieController');

const sessionController = {};

// load the main page
sessionController.mainPage = (req, res, next) => {
  cookieController.setCookie();
};

module.exports = sessionController;
