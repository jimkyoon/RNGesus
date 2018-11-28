const sessionController = require('../controllers/sessionController');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('cookie', 'secret');
};

cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.id, { httpOnly: true });
};

module.exports = cookieController;
