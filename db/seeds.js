require('dotenv').config()
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/API-practice')
var User = require('../models/user')
var Flight = require('../models/flight')
var Seats = require('../models/seats')

mongoose.connect(process.env.MONGODB_URI)



var ryan = new User({
    first_name: 'Ryan',
    last_name: 'Sneider',
    flight: 0987,
    link1: 'facebook',
    link2: 'linkedIn',
    email: 'ryan@gmail.com',
    
})

var steve = new User({
    first_name: 'Steve',
    last_name: 'Gosling',
    flight: 0987,
    link1: 'facebook',
    link2: 'linkedIn',
    email: 'steve@gmail.com',
    
})

var flightSeats = new Seats({
    row: "5A",
    seat: [1, 2, 3, 4, 5, 6, 7, 8, 9], //This isn't in your schema?
    users: [steve, ryan] //This isn't working
  })

const flight = new Flight({
    name: "KLM Dutch Royal Airlines",
    info: "Amsterdam",
    arrival: 1445,
    departure: 0900,
    seats: [flightSeats]
})
const flight2 = new Flight({
    name: "Delta",
    info: "Frankfurt",
    arrival: 1315,
    departure: 1800,
    seats: [flightSeats]
})
const flight3 = new Flight({
    name: "British Airways",
    info: "London",
    arrival: 0930,
    departure: 1700,
    seats: [flightSeats]
})
const flight4 = new Flight({
    name: "France Airways",
    info: "Paris",
    arrival: 1130,
    departure: 2100,
    seats: [flightSeats]
})
User.remove().then(() => {
    return Seats.remove().then(() => {
        return Flight.remove().then(() => {
        })
    })
}).then(() => {
    console.log(flight)
    Flight.insertMany([flight, flight2, flight3, flight4]).then(()=> {
        console.log('saved worked')
    })
})