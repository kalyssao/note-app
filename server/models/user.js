const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    passwordHash: {
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model("User", userSchema)