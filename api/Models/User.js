// Developed by Guneet Singh Dhillon (B00843346, guneet@dal.ca)
// This is the User model for user and session management
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    // extra field added to implement the password recovery feature
    token: {
        type: String,
        default: ""
    }
})

module.exports = User = mongoose.model('user', UserSchema);