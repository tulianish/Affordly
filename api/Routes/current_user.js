const express = require('express');
const User = require('../Models/User')
const router = express.Router();
const auth = require('../middleware/auth');


router.post('/', auth, async (req,res) => {
    try {
        const user = await User.findOne({ email: req.user.email }).select('-password');
        return res.json(user);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server error');
    }
});

module.exports = router;