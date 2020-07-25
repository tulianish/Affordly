const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const check = require('express-validator/check').check;
const validationResult = require('express-validator/check').validationResult;
const bcryptjs = require('bcryptjs');
const User = require('../Models/User');

router.post('/', [
    check('email', 'Email is not in proper format').isEmail()
    // more checks can be added depending upon the extent of backend validation
], async (req,res) => {
    const error = validationResult(req);
    console.log('gg');
    console.log(req.body);
    // if(error.isEmpty() === false){
    //     return res.status(400).json({ error: error.array() });
    // }

    const { email, password } = req.body;

    try{
        let user = await User.findOne({ email: email });
        if(!user) {
            return res.status(400).json({ "error":"user ni hai"});
        }

        const isCompare = await bcryptjs.compare(password, user.password);
        if(isCompare === false){
            return res.status(400).json({ "error":"password galt hai"});
        }


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
            res.json({ token });
        });
    
    } catch (e) {
        console.error(e.message);
        return res.status(500).send('server error');
    }
});

module.exports = router;