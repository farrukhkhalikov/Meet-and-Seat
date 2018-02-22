var schemas = require('../db/schema')
var mongoose = require('mongoose')
var User = mongoose.model('User', schemas.UserSchema)



module.exports = User

