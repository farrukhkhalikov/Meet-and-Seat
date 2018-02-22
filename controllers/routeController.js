var express = require('express')
var router = express.Router()
var User = require('../models/user')


///index route
router.get('/', (req, res) => {
 User.find().then((users) => {
     res.render('user/index', {
         users: users
     })
 })
})

/// show route
router.get('/:id', (req, res) => {
  User.findById(req.params.id).then((user) => {
      res.render('user/show', {
          user: user
      })
  }) 
})


//new route
router.get('/new', (req, res) => {
    res.render('user/new')
})

///create route
router.post('/', (req, res) => {
    var info = req.body
})


///update route
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
      username: req.body.username,
      image: req.body.image,
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phonenumber: req.body.phonenumber
  }, {new: true}).then((updateUser) => {
      res.redirect(`/users/${updateUser.id}`)
  })
})

//user delete
router.delete('/:id', (req, res) => {
   User.findByIdAndRemove(req.params.id).then(() => {
       res.redirect('/users')
   })
})


module.exports = router
