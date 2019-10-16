const jwt = require('express-jwt')

exports.authorization = jwt({secret: 'teto-foreva'})