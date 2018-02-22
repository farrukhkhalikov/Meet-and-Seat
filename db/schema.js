var mongoose = require('mongoose')
var Schema = mongoose.Schema
mongoose.Promise = global.Promise


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
    items: [ ItemSchema ]
})

// UserSchema.pre('save', (next) => {
//     var now = new Date()
//     This.updated_at = now
//     if(!this.created_at) {
//         this.created_at = now
//     }
//     next()
// })


module.exports = {
    UserSchema,
    ItemSchema
}