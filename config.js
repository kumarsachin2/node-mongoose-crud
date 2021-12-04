// project config
exports.APP_NAME = 'Signup';
exports.MONGODB_URI = 'mongodb+srv://admin_node:PASSWORD@nodejs.iciqw.mongodb.net/DBNAME?retryWrites=true&w=majority';
exports.JWT_SECRET = 'WhatIsMySecret!';
exports.TOKEN_EXPIRES_IN = '30d';

exports.PORT = 8080;

// user model config
exports.PASSWORD_HASH_SAIL = 12;
exports.PASSWORD_MIN_LENGTH = 8;
