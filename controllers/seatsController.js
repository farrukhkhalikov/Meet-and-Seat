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


router.post('/', (req, res) => {

    // Get company we need to save soda to
    Flight.findById(req.params.flightId).then((flight) => {
  
      // THEN once we have the company, take req.body and make a new Soda
      const newSeat = new Seat({
        seat: seat,
        user: user
      })
  
      // Push Soda to company.sodas
      flight.seats.push(newSeat)
  
      // Save Company
      return flight.save()
    }).then((updatedFlight) => {
  
      // Redirect to all sodas
      res.redirect(`/flights/${req.params.flightId}/seats`)
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
  

   /// route
   router.get('/:id/edit', (req, res) => {
    Flight.findById(req.params.flightId).then((flight) => {
     var seat = flight.seats.id(req.params.id)
        res.render('seats/edit', {
            flightId: req.params.flightId,
            seat: seat
        })
    })
})



   

        //user delete
        router.get('/:id', (request, response) => {
            Flight.findById(req.params.flightId).then((flight) => {

                const seatIdToDelete = request.params.id;

                Seat.findByIdAndRemove(seatIdToDelete).then(() => {
                    console.log(`Successfully deleted user with ID ${seatIdToDelete}!`);

                    response.redirect('/seats');
                });
            });
        })
    })


module.exports = router