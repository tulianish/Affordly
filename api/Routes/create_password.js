const nodemailer = require("nodemailer");
const User = require("../Models/User");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


router.post('/', async (req, res) => {
    console.log('inside forgot pass', req.body);
    const { email, password } = req.body;
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

        const salt = await bcrypt.genSalt(9);
        coded_pass = await bcrypt.hash(password, salt);
        console.log("coded pass ", coded_pass);
        user.password = coded_pass;
        await user.save();


        // await user.save();
        // const token_fp = user.token;
        var mailOptions = {
            from: "affordly123@gmail.com",
            to: req.body.email,
            subject: 'Affordly - Password Reset Successful',
            html: `<h3>Hello, <br>You password has been successfully updated.</h3>
    
            <p><h3>Thank you for using Affordly.</h3></p>
            
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
                    Message: "Password changed successfully.",
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