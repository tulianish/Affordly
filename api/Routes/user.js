// Developed by Guneet Singh Dhillon (B00843346, guneet@dal.ca)
// This signup user API will be used to register new users in our database
// Reference for this code: "MERN Stack Front To Back: Full Stack React, Redux & Node.js", Udemy, 2020. [Online]. Available: https://www.udemy.com/course/mern-stack-front-to-back/. [Accessed: 25- Jul- 2020].

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const check = require('express-validator').check;
const validationResult = require('express-validator').validationResult;
const bcryptjs = require('bcryptjs');
const User = require('../Models/User');

router.post('/', async (req,res) => {
    // console.log("called ", req.body);
    const error = validationResult(req);
    if(error.isEmpty() === false){
        return res.status(400).json({ error: error.array() });
    }

    const { first_name, last_name, email, password, gender, address, country, state, zip, bio } = req.body;

    try{
        let user = await User.findOne({ email: email });
        
        // Return error if email is already registered
        if(user) {
            return res.status(400).json({ "error":"This email has already been registered."});
        }

        user = new User({
            first_name, last_name, email, password, gender, address, country, state, zip, bio
        })

        // Encrypt the password
        const encryption_variable = await bcryptjs.genSalt(5);
        user.password = await bcryptjs.hash(password, encryption_variable);

        // Save the user details in database
        await user.save();

        const payload = {
            user: {
                email: user.email
            }
        };

        jwt.sign(payload, "affordly_secret_token", { expiresIn: 1800 }, (err, token) => {
            if(err){
                throw err;
            }
            // return jwt
            return res.json({ "msg":"Registration successful" });
        });
    
    } catch (e) {
        console.error(e.message);
        return res.status(500).send('server error');
    }
});

module.exports = router;