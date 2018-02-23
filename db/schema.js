var mongoose = require('mongoose')
var Schema = mongoose.Schema


///created schema for flights
var FlightSchema = new Schema({
    name: String,
    info: String,
    arrival: Number,
    departure: Number
})

///for seats
var flightSeats = new Schema({
  id: Number,
  user: String,
  flight: Number,
  seats: []
})


///for user
var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    flight: Number,
    link1: String,
    link2: String,
    email: {
        type: String
    },
})




module.exports = {
    UserSchema,
    FlightSchema,
    flightSeats
}