var schema = require('../db/schema')
var mongoose = require('mongoose')
var Item = mongoose.model('Item', schema.ItemSchema)


module.exports = Item