// Developed by Guneet Singh Dhillon (B00843346, guneet@dal.ca)
// This current_user API will act as a wrapper around middleware auth.
// This API will provide an easy access for my teammates to code for protected routes.

const express = require('express');
const User = require('../Models/User')
const router = express.Router();
const auth = require('../middleware/auth');


router.post('/', auth, async (req,res) => {
    try {
        // console.warn("inside current ")
        // note that all details of the user are returned except password

        // console.warn("inside current ")
        const user = await User.findOne({ email: req.user.email }).select('-password');
        return res.json(user);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server error');
    }
});

module.exports = router;