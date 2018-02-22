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




//new route
router.get('/new', (req, res) => {
    res.render('users/new')
})

///create route
router.post('/', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,        
    })
    newUser.save().then((savedUser) => {
        res.redirect(`/users/${savedUser.id}`)
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

// edit route
router.get('/:id/edit', (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.render('users/edit', {
            id: req.params.id,
            user: user
        })
    })
})

///update route
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
      username: req.body.username,
      email: req.body.email,
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
