var schema = require('../db/schema')
var mongoose = require('mongoose')
var Seats = mongoose.model('Seats', schema.seatSchema)


module.exports = Seats

