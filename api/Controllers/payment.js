/**
 * Developed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 * 
 */

/* Developed by PIYUSH PIYUSH (B00844563, piyush@dal.ca) */
// This files contains the logic for making the payment and sending the email along with the pdf via email.
// This pdf and email is generated and sent using pdfkit and nodemailer respectively.
// Referred from https://blog.mailtrap.io/sending-emails-with-nodemailer/ to understand nodemailer
// Understood the concepts of pdf generation using https://pdfkit.org/

var express = require("express");
var router = express.Router();
const { v1: uuidv4 } = require('uuid');
const PDFDocument = require("pdfkit");
const fs = require("fs");
const nodemailer = require("nodemailer");
const path = require("path");
const Payment = require("../Models/payment");


const paymentController = {
    payment(req, res) {
        let unique_id = uuidv4(); //generating a unique ID for storing the unique pdf name and unique payment consirmation reference number.
        Payment.find({}, function (err, data) { //extracting valid card details from the database
            cardname = (data[0].cardname);
            cardnum = (data[0].cardnum);
            month = (data[0].month);
            year = (data[0].year);
            cvv = (data[0].cvv);
            email = req.body.email;
            fname = req.body.fname;
            lname = req.body.lname;
            product_price = req.body.product_price
            product_city = req.body.product_city
            product_zip = req.body.product_zip
            product_address = req.body.product_address
            product_name = req.body.product_name
            product_contactNumber = req.body.product_contactNumber
            product_email = req.body.product_email

            //matching if the card details entered by the user is valid or not.
            if (req.body.cardname == cardname && req.body.cardnum == cardnum && req.body.month == month && req.body.year == year && req.body.cvv == cvv) {

                var doc = new PDFDocument(); //started generating pdf containing payee information.
                doc.pipe(fs.createWriteStream("./public/document/" + unique_id + ".pdf"));
                doc.fontSize(12).text("Your payment is confirmed!", 200, 90);

                doc //printing text on pdf
                    .text("Payment Reference Number: " + unique_id, 130, 120)
                    .font("Helvetica-Bold");

                doc
                    .fontSize(9)
                    .font("Helvetica-Bold")
                    .text("Buyer's Name: " + fname + " " + lname , 220, 240)
                    .text("Buyer's Email: " + email, 220, 260)
                    .text("Card Number: " + "**** **** **** 4567", 220, 280)
                    .text("Expiry: " + month + " / " + year, 220, 300)
                    .text("Price: $" + product_price, 220, 320)
                    .text("Item Location: " + product_address + ", " + product_city + ", " + product_zip, 220, 340)
                    .text("Seller's Contact Number: " + product_contactNumber, 220, 360)
                    .text("Seller's Email Address: " + product_email, 220, 380);


                //adding images to the pdf (logo and confirmed images)
                doc.image(__dirname + "/../../public/images/confirmed.png", 210, 150, { width: 170, height: 70 });
                doc.image(__dirname + "/../../public/images/logo.png", 150, 240, { width: 50, height: 50 });
                doc.end();

                //adding email details along with attachments, text, subject.
                const mailOptions = {
                    from: "payment-confirmation@affordly.com",
                    to: email,
                    subject: "Afford-ly Payment Confirmation - " + unique_id,
                    text: "Greetings " + fname + " " + lname + "," + " \n \n \n Afford-ly makes sure that your debit, and credit information is kept secure, and encrypted. \n \n Thanks for buying " + product_name + " for only $" + product_price + ". \n \n Please find attached payment confirmation file. \n \n \n Regards, \n Team Afford.ly",
                    html: "",
                    attachments: [
                        {
                            filename: unique_id + ".pdf",
                            path: path.join(__dirname, "../../public/document/" + unique_id + ".pdf"),
                            contentType: "application/pdf" //defining type of file that I am attaching with the email.
                        }
                    ]
                };
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
                            message: "Payment Successful" //message is payment is made
                        });
                    }
                });
            }
            else {
                res.send({
                    code: 400,
                    message: "Payment Failed : Invalid Card" //error message if card details are not valid
                });
            }
        }
        )
    }
}

module.exports = paymentController;
