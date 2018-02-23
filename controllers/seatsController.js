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
    Flight.findById(req.params.flightId).then((flight) => {
        var seats = flight.seats
        res.render('seats/index', {
            flight: flight,
            seats: seats
        })
    
        })
    })


   /// show route
   //flight id and seat id
router.get('/:id', (req, res) => {
    Flight.findById(req.params.flightId).then((flight) => {
    Seat.findById(req.params.id).then((user) => {
        res.render('seats/show', {
            flight: flight,
            seat: seat
        })
    }) 
  })

  ///update route
router.put('/:id', (req, res) => {
    Flight.findById(req.params.flightId).then((flight) => {
    Seat.findByIdAndUpdate(req.params.id, {
        flight: flight,
        seat: seat
    }, {new: true}).then((updateSeat) => {
        res.redirect(`flights/flightsId/seats/${updateSeat.id}`)
    })
  })
  
  //user delete
  router.get('/:id/delete', (request, response) => {
    Flight.findById(req.params.flightId).then((flight) => {
  
      const seatIdToDelete = request.params.id;
    
      Seat.findByIdAndRemove(seatIdToDelete).then(() => {
        console.log(`Successfully deleted user with ID ${seatIdToDelete}!`);
    
        response.redirect('/seats');
      });
    });
})
})
})

  module.exports = router