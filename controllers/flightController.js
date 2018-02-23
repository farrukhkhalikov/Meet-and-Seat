var express = require('express')
var router = express.Router()
var User = require('../models/user')


///index route
router.get('/', (req, res) => {
 User.find().then((users) => {
     res.render('users/index', {
         users: users
     })
 })
})

/// show route
router.get('/:id', (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.render('users/show', {
            user: user
        })
    }) 
  })

  
  
  
  module.exports = router
