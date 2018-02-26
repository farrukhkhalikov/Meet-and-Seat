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

//create new seat
router.post('/', (req, res) => {

    // Get Flight we need to save seat to
    Flight.findById(req.params.flightId).then((flight) => {

        // THEN once we have the Flight, take req.body and make a new seat
        const newSeat = new Seat({
            seat: seat,
            user: user
        })

        // Push seat to Flight.seats
        flight.seats.push(newSeat)

        // Save Flight
        return flight.save()
    }).then((updatedFlight) => {

        // Redirect to all seats
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
})

//put OR patch for updating existing seats

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

router.patch('/:id', (req, res) => {
    console.log("HITTING MY SEAT PATCH METHOD")        
    console.log("Current Flight ID used for query:", req.params)

    Flight.findById(req.params.flightId).then((flight) => {
        console.log("Current Flight:", flight)
  
      // We don't have a nice method like findByIdAndUpdate here
      // so instead we need to manually change the seats values
      const seat = flight.seats.id(req.params.id)
      console.log(seat)
      seat.row = req.body.row
            
      // Then Save the Flight
      return flight.save()
    }).then((updatedflight) => {
      res.redirect(`/flights/${req.params.flightId}/seats/`)
    }).catch((err) => {
        console.log(err)
    })
  })



// delete
router.delete('/:id', (request, response) => {
    console.log('here from the delete route')
    Flight.findById(request.params.flightId).then((flight) => {

        const seatIdToDelete = request.params.id;
        console.log('hit the delete ',seatIdToDelete)

        flight.seats.id(seatIdToDelete).remove()
        return flight.save()
        
        
        
        
        })

        .then(() => {
            console.log(`Successfully deleted user!`);

            response.redirect(`/flights/${request.params.flightId}/seats/`);
    });
})



module.exports = router