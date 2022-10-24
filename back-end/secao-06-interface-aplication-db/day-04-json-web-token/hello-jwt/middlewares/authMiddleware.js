const jwt = require('jsonwebtoken');
/* const valiations = require('../utils/jwtUtil'); */

const authMiddleware = (req, _res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        const err = new Error('Token not found');
        err.statusCode = 401;
        return next(err);
    }

    try {
        const payload = jwt.verify(authorization, process.env.JWT_SECRET);

        req.user = payload;
        return next();
    } catch (err) {
        console.log(err);
        err.statusCode = 401;
        return next(err);
      }
    };

    module.exports = authMiddleware;