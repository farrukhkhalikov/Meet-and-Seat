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

  ///update route
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        email: req.body.email,
    }, {new: true}).then((updateUser) => {
        res.redirect(`/users/${updateUser.id}`)
    })
  })
  
  //user delete
  router.get('/:id/delete', (request, response) => {
  
      const userIdToDelete = request.params.id;
    
      User.findByIdAndRemove(userIdToDelete).then(() => {
        console.log(`Successfully deleted user with ID ${userIdToDelete}!`);
    
        response.redirect('/users');
      });
    });
  
  
  module.exports = router