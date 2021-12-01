const errorMessage = require('./errorMessage')

//Authentication errors
exports.throwAuthenticateError = () => {
    const error = new Error(error.errAuthentication);
    error.statusCode = 401;
    throw error;
}

exports.throwError401 = (message) => {
    const error = new Error(message);
    error.statusCode = 401;
    throw error;
}

//Error 500
exports.error500 = (error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message || errorMessage.errSomethingWhenWrong;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
};