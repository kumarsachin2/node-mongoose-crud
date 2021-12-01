var express = require('express');
var router = express.Router();
var user = require('../apis/user');
const validation = require('../utils/validation')

//signup
router.post('/signup', validation.signupValidator, user.signup);

//router.get('/:userId', user.getUserInfo);

module.exports = router;



