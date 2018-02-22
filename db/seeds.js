var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/API-practice')
var User = require('../models/user')
var Item = require('../models/item')

var ryan = new User({
    first_name: 'Ryan',
    email: 'ryan@gmail.com',
    items: [{
        name: 'do some chores!'
    }]
})

var steve = new User({
    first_name: 'Steve',
    email: 'steve@gmail.com',
    items: [{
        name: 'do something!'
    }]
})

User.remove().then(() =>{
    return ryan.save()
})
.then(() => {
    return steve.save()
})
.then(() => {
    console.log('everyone is saved')
})