const nodemailer = require("nodemailer");
const User = require("../Models/User");
const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");


router.post('/', async (req, res) => {
    console.log('inside forgot pass', req.body);
    const { email } = req.body;
    try {
        let user = await User.findOne({ email: email });
        console.log("user ", user);
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "affordly123@gmail.com",
              pass: "afford-ly*123",
            }
        });

        console.log('2');
        const payload = {
            user: {
                email: user.email
            }
        };
        // create and return a json web token which expires in 1800 seconds, i.e. half hour
        var token_fp = jwt.sign(payload, "secret_key_reset", { expiresIn: "5m" });
        
        console.log("token mil gaya ", token_fp);
        // await user.save();
        // const token_fp = user.token;
        var mailOptions = {
            from: "affordly123@gmail.com",
            to: req.body.email,
            subject: 'Affordly - Password Reset Request',
            text: `Hello,\nPlease click the link below to reset your password. \n
            http:localhost:3000/create_password/${token_fp}\n
            Thank you\n
            Regards\n
            Affordly`
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