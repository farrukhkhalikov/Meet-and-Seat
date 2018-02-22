var Schema = require('..db/schema')
var mongoose = require('mongoose')
var Item = mongoose.model('Item', Schema.ItemSchema)


module.exports = Item