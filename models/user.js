var UserSchema = require('../db/schema')
var mongoose = require('mongoose')
var User = mongoose.model('User', UserSchema)



module.exports = User

