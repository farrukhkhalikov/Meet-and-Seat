require('dotenv').config()
var mongoose = require('mongoose')
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

  const seat1 = new Seats({
    row: "5B",
    seat: [1, 2, 3, 4, 5, 6, 7, 8, 9], //This isn't in your schema?
    users: [steve]

  })

const flight = new Flight({
    name: "KLM Dutch Royal Airlines",
    info: "Amsterdam",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/1200px-KLM_logo.svg.png",
    arrival: 1445,
    departure: 0900,
    seats: [flightSeats, seat1]
})
const flight2 = new Flight({
    name: "Delta",
    info: "Frankfurt",
    img: "https://i.imgur.com/ExkgKNT.png",
    arrival: 1315,
    departure: 1800,
    seats: [flightSeats, seat1]
})
const flight3 = new Flight({
    name: "British Airways",
    info: "London",
    img: "http://www.stickpng.com/assets/images/587b50af44060909aa603a7b.png",
    arrival: 0930,
    departure: 1700,
    seats: [flightSeats, seat1]
})
const flight4 = new Flight({
    name: "France Airways",
    info: "Paris",
    img: "https://us-res.france.fr/rwb/2015/site/img/af-skyteam.png",
    arrival: 1130,
    departure: 2100,
    seats: [flightSeats, seat1]
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