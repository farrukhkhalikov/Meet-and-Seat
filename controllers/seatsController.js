var express = require('express')
var router = express.Router({
    mergeParams: true
})
var Flight = require('../models/flight')
var User = require('../models/user')
var Seat = require('../models/seats')

///index route 
// flight id
router.get('/', (req, res) => {
    Seat.find().then((seats) => {
        res.render('seats/index', {
            seats: seats
        })
    })
   })

   /// show route
   //flight id and seat id
router.get('/:id', (req, res) => {
    Seat.findById(req.params.id).then((user) => {
        res.render('seats/show', {
            seat: seat
        })
    }) 
  })

  ///update route
router.put('/:id', (req, res) => {
    Seat.findByIdAndUpdate(req.params.id, {
        id: req.body.id,
        user: req.body.user,
    }, {new: true}).then((updateSeat) => {
        res.redirect(`/seats/${updateSeat.id}`)
    })
  })
  
  //user delete
  router.get('/:id/delete', (request, response) => {
  
      const seatIdToDelete = request.params.id;
    
      Seat.findByIdAndRemove(seatIdToDelete).then(() => {
        console.log(`Successfully deleted user with ID ${seatIdToDelete}!`);
    
        response.redirect('/seats');
      });
    });
  
  
  module.exports = router