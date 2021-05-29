const mongoose = require('mongoose')

userSchema = mongoose.Schema({
    userName: String,
    userEmail: String,
    userPassword: String,
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel