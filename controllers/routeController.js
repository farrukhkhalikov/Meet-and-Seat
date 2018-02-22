var express = require('express')
var router = express.Router()


///index route
router.get('/', (req, res) => {
    res.send("welcome to my page")
})

/// show route
router.get('/:id', (req, res) => {
    var id = req.params.id
})


///create route
router.post('/', (req, res) => {
    var info = req.body
})


///update route
router.put('/:id', (req, res) => {

})

//user delete
router.delete('/:id', (req, res) => {

})


module.exports = router
