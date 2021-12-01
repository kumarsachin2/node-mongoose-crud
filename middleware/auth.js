const jwt = require('jsonwebtoken');
const Config = require('../config');
const error = require('../utils/errors');
const CommonError = require('../utils/errorMessage');

const catchTokenError = (err) => {
    err.message = error.errAuthentication;

    if (err.name === 'TokenExpiredError') {
        err.message = error.errAuthenticationExpired;
    }

    err.statusCode = 401;
    throw err;
}

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        CommonError.throwAuthenticateError();
    }

    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, Config.JWT_SECRET);
    } catch (err) {
        catchTokenError(err);
    }

    if (!decodedToken) {
        CommonError.throwAuthenticateError();
    }

    req.userId = decodedToken.userId;
    next();
};
