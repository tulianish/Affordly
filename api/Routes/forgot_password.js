/*
 * File developed by Guneet Singh Dhillon (guneet@dal.ca, B00843346) 
 * 
 * Feature:
 * This API is the back end of creating a password reset request and is a part of password recovery feature
 * 
 */


const nodemailer = require("nodemailer");
const User = require("../Models/User");
const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");


router.post('/', async (req, res) => {
    // console.log('inside forgot pass', req.body);
    const { email } = req.body;
    try {
        let user = await User.findOne({ email: email });
        // console.log("user ", user);
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "affordly123@gmail.com",
              pass: "afford-ly*123",
            }
        });

        // console.log('2');
        const payload = {
            user: {
                email: user.email
            }
        };
        // create and return a json web token which expires in 1800 seconds, i.e. half hour
        var token_fp = jwt.sign(payload, "aalokhaalo", { expiresIn: "10m" });
        const reset_link = "https://the-affordly.herokuapp.com/create_password/"+token_fp;
        // console.log("link check", reset_link);
        // await user.save();
        // const token_fp = user.token;
        var mailOptions = {
            from: "affordly123@gmail.com",
            to: req.body.email,
            subject: 'Affordly - Password Reset Request',
            html: `<h3>Hello, <br>Please click the link below to reset your password.</h3>
            <a href="${reset_link}"><p>${reset_link}</p></a>
            <p><h3>For security reasons, this link will expire in 10 minutes. If the link is not working, please copy it and paste it in your browser.</h3></p>
            <p><h3>Please ignore this email if you did not request help with your password – your current password will remain unchanged.</h3></p>
            <h3>Thank you</h3>
            <h3>Regards</h3>
            <h3>Affordly</h3>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            }
            else {
                console.log("Email sent: ", info.response);
                return res.status(200).json({
                    success: true,
                    Message: "Reset link has been sent to your email.",
                });
            }
          });
        transporter.close();

    }
    catch (e) {
        console.error(e.message);
        return res.status(500).send('Server Error');
    }  
});

module.exports = router;