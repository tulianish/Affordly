/**
 * Developed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 * 
 */

/* Developed by PIYUSH PIYUSH (B00844563, piyush@dal.ca) */
// This files contains the logic for sharing the post using email with the help of nodeMailer.
// This email is generated and sent using nodemailer.
// Referred from https://blog.mailtrap.io/sending-emails-with-nodemailer/ to understand nodemailer

var express = require("express");
var router = express.Router();
const { v1: uuidv4 } = require('uuid');
const nodemailer = require("nodemailer");

const shareController = {
    share(req, res) {
        let unique_id = uuidv4(); //generating a unique ID for sending email to the user.
            email = req.body.email;
            message = req.body.message;
            id = req.query.id
            post_link = "https://the-affordly.herokuapp.com/posting/"+id

            //matching if the card details entered by the user is valid or not.
            if (message) {

                //adding email details along with attachments, text, subject.
                const mailOptions = {
                    from: "share-confirmation@affordly.com",
                    to: email,
                    subject: "Afford-ly Post Share - " + unique_id,
                    text: "Greetings,  \n \n \n Your friend shared this post with you. \n Custom Message - " + message + "\n Please use the link - " + post_link + " to explore more options. \n \n Regards, \n Team Afford-ly",
                    html: "",
                }

                var req_data = req.body;
                var transporter = nodemailer.createTransport({
                    service: "gmail", //using particularly gmail service
                    auth: {
                        user: "affordly123@gmail.com",
                        pass: "afford-ly*123"
                    }
                });

                //handing errors and success message for the front-end
                transporter.sendMail(mailOptions, function (error, cb) {
                    if (error) console.log("Error while sending payment confirmation", error);
                    else {
                        res.send({
                            code: 200,
                            message: "Shared Successful" //message is payment is made
                        });
                    }
                });
            }

            else {
                //adding email details along with attachments, text, subject.
                const mailOptions = {
                    from: "payment-confirmation@affordly.com",
                    to: email,
                    subject: "Afford-ly Post Share - " + unique_id,
                    text: "Greetings,  \n \n \n Your friend shared this post with you. \n\n Please use the link - " + post_link + " to explore more options. \n \n \n Regards, \n Team Afford.ly",
                    html: "",
                }

                var req_data = req.body;
                var transporter = nodemailer.createTransport({
                    service: "gmail", //using particularly gmail service
                    auth: {
                        user: "affordly123@gmail.com",
                        pass: "afford-ly*123"
                    }
                });

                //handing errors and success message for the front-end
                transporter.sendMail(mailOptions, function (error, cb) {
                    if (error) console.log("Error while sending payment confirmation", error);
                    else {
                        res.send({
                            code: 200,
                            message: "Shared Successfully" //message is payment is made
                        });
                    }
                });
            }
    }
}

module.exports = shareController;