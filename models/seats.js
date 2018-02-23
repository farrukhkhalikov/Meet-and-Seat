var schema = require('../db/schema')
var mongoose = require('mongoose')
var Seats = mongoose.model('Seats', schema.flightSeatsSchema)


module.exports = Seats

