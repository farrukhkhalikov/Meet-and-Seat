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
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/1200px-KLM_logo.svg.png",
    arrival: 1445,
    departure: 0900,
    seats: [flightSeats]
})
const flight2 = new Flight({
    name: "Delta",
    info: "Frankfurt",
    img: "https://i.imgur.com/ExkgKNT.png",
    arrival: 1315,
    departure: 1800,
    seats: [flightSeats]
})
const flight3 = new Flight({
    name: "British Airways",
    info: "London",
    img: "https://vignette.wikia.nocookie.net/logopedia/images/a/a3/British-airways-logo.jpg/revision/latest?cb=20150131170343",
    arrival: 0930,
    departure: 1700,
    seats: [flightSeats]
})
const flight4 = new Flight({
    name: "France Airways",
    info: "Paris",
    img: "https://s-media-cache-ak0.pinimg.com/originals/30/82/40/308240d64c83f2f17767b2c5127cb40b.jpg",
    arrival: 1130,
    departure: 2100,
    seats: [flightSeats]
})
User.remove().then(() => {
    return Seats.remove().then(() => {
        return Flight.remove()
    })
}).then(() => {
    //console.log(flight)
    Flight.insertMany([flight, flight2, flight3, flight4]).then(()=> {
        console.log('saved worked')
    })
})