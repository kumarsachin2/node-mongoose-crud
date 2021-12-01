const { body, validationResult } = require('express-validator');
const config = require('../config');
const errorMessage = require('../utils/errorMessage');
const User = require('../models/user');

exports.catchValidation = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error(errorMessage.errValidationFailed);
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
}

exports.signupValidator = [
    body('first_name')
    .trim()
    .not()
    .isEmpty()
    .withMessage(errorMessage.errFirstNameEmpty),

    body('last_name')
    .trim()
    .not()
    .isEmpty()
    .withMessage(errorMessage.errLastNameEmpty),

    
    body('email')
    .isEmail()
    .withMessage(errorMessage.errInvalidEmail)
    .custom((value, { req }) => {
        return User.findOne({ email: value })
            .then(userDoc => {
                if (userDoc) {
                    return Promise.reject(errorMessage.errEmailExists);
                }
            });
    })
    .normalizeEmail(),

    body('birth_date')
    .trim()
    .not()
    .isEmpty()
    .withMessage(errorMessage.errBirthDateEmpty),

    body('street')
    .trim()
    .not()
    .isEmpty()
    .withMessage(errorMessage.errStreetEmpty),

    body('street_number')
    .trim()
    .not()
    .isEmpty()
    .withMessage(errorMessage.errStreetNumberEmpty),

    body('city')
    .trim()
    .not()
    .isEmpty()
    .withMessage(errorMessage.errCityNameEmpty),

    body('country')
    .trim()
    .not()
    .isEmpty()
    .withMessage(errorMessage.errCountryNameEmpty),

    body('password')
    .trim()
    .isLength({ min: config.PASSWORD_MIN_LENGTH })
    .withMessage(errorMessage.errPasswordLength(config.PASSWORD_MIN_LENGTH))

]
