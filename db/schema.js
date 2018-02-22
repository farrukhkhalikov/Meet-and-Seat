var mongoose = require('mongoose')
var Schema = mongoose.Schema


///created schema for items
var ItemSchema = new Schema({
    name: String
})
///for user
var UserSchema = new Schema({
    first_name: String,
    email: {
        type: String,
        required: true
    },
    // items: [ ItemSchema ]
})




module.exports = {
    UserSchema,
    ItemSchema
}