const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is requirde'],
        trim: true,
        maxLength: [50, "Name must not exceed 50 characters"],
    },
    email:{
        type: String,
        required: [true, 'Email is requirde'],
        maxLength: [50, "Email must not exceed 50 characters"],
        unique: true,
    }
})

module.exports = mongoose.model("User", userSchema)