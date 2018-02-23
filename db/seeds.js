var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/API-practice')
var User = require('../models/user')
var Flight = require('../models/flight')
var Seats = require('../models/seats')

// items here
const flight = new Flight({
    name: "KLM Dutch Royal Airlines",
    info: "Amsterdam",
    arrival: 14-45,
    departure: 09-00
})

var seats = new Seats({
  id: 5,
  user: "Cameron Gunter",
  flight: 0987,
  seats: [1, 2, 3, 4, 5, 6, 7, 8, 9]
})

// then add items to the arrays
var ryan = new User({
    first_name: 'Ryan',
    email: 'ryan@gmail.com',
    items: [plane]
})

var steve = new User({
    first_name: 'Steve',
    email: 'steve@gmail.com',
    items: []
})

User.remove().then(() => {
        return ryan.save()
    })
    .then((savedRyan) => {
        console.log(savedRyan)
        return steve.save()
    })
    .then(() => {
        console.log('everyone is saved')
    }).catch((err) => {
        console.log(err)
    })