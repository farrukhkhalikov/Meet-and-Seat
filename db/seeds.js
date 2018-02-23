var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/API-practice')
var User = require('../models/user')
var Flight = require('../models/item')

// items here
const plane = new Flight({
    name: "airbus"
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