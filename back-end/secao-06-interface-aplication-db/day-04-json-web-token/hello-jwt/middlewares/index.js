const error = require('./error');
const loginMiddleware = require('./login.middleware');
const authMiddleware = require('./authMiddleware');

module.exports = {
  error,
  loginMiddleware,
  authMiddleware,
};
