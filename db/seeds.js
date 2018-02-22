var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/API-practice')
var User = require('../models/user')
var Item = require('../models/item')

// items here
const apple = new Item ({
    name: "apple"
})

// then add items to the arrays
var ryan = new User({
    first_name: 'Ryan',
    email: 'ryan@gmail.com',
    items: [apple]
})

var steve = new User({
    first_name: 'Steve',
    email: 'steve@gmail.com',
    items: []
})

User.remove().then(() =>{
    return ryan.save()
})
.then(() => {
    return steve.save()
})
.then(() => {
    console.log('everyone is saved')
}).catch((err) => {
    console.log(err)
})