var Schema = require('../db/schema')
var mongoose = require('mongoose')
var User = mongoose.model('User', Schema.UserSchema)



module.exports = User

