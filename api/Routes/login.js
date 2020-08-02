// Developed by Guneet Singh Dhillon (B00843346, guneet@dal.ca)
// This login API will use json web token to allow user to log into the system.
// Reference for this code: "MERN Stack Front To Back: Full Stack React, Redux & Node.js", Udemy, 2020. [Online]. Available: https://www.udemy.com/course/mern-stack-front-to-back/. [Accessed: 25- Jul- 2020].

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const check = require('express-validator').check;
const validationResult = require('express-validator').validationResult;
const bcryptjs = require('bcryptjs');
const User = require('../Models/User');

router.post('/', [
    check('email', 'Email is not in proper format').isEmail()
    // more checks can be added depending upon the extent of backend validation
], async (req,res) => {
    const error = validationResult(req);
    // console.log('gg');
    // console.log(req.body);
    // if(error.isEmpty() === false){
    //     return res.status(400).json({ error: error.array() });
    // }

    const { email, password } = req.body;

    try{
        // if email is not present in db, return error 
        let user = await User.findOne({ email: email });
        if(!user) {
            return res.status(400).json({ "error":"user ni hai"});
        }

        // if passwords do not match, return error
        const isCompare = await bcryptjs.compare(password, user.password);
        if(isCompare === false){
            return res.status(400).json({ "error":"password galt hai"});
        }


        const payload = {
            user: {
                email: user.email
            }
        };
        // create and return a json web token which expires in 1800 seconds, i.e. half hour
        jwt.sign(payload, "affordly_secret_token", { expiresIn: 1800 }, (err, token) => {
            if(err){
                throw err;
            }
            // return jwt
            res.json({ token });
        });
    
    } catch (e) {
        console.error(e.message);
        return res.status(500).send('server error');
    }
});

module.exports = router;