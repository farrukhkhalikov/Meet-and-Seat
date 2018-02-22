var schema = require('../db/schema')
var mongoose = require('mongoose')
var Flight = mongoose.model('Flight', schema.FlightSchema)


module.exports = Flight

