var mongoose = require('mongoose')
var Schema = mongoose.Schema



///for user
var userSchema = new Schema({
    first_name: String,
    last_name: String,
    flight: Number,
    link1: String,
    link2: String,
    email: {
        type: String
    },
})

///for seats
var seatSchema = new Schema({
    row: String,
    seat: [Number],
    users: [userSchema]
  })

///created schema for flights
var flightSchema = new Schema({
    name: String,
    info: String,
    img: String,
    arrival: Number,
    departure: Number,
    seats: [seatSchema]
})


module.exports = {
    userSchema,
    flightSchema,
    seatSchema
}