/* Built by PIYUSH PIYUSH (B00844563, piyush@dal.ca) */



var express = require("express");
var router = express.Router();
const { v1: uuidv1 } = require('uuid');
const PDFDocument = require("pdfkit");
const fs = require("fs");
const nodemailer = require("nodemailer");
const path = require("path");
const Payment = require("../Models/payment");


const paymentController = {
    payment(req, res) {
        let unique_id = uuidv1();

        fetch("http://127.0.0.1:5001/api/current_user", {
            method:"get",
          headers:{
            'Content-Type':'application/json',
            'x-auth-token': token
          }
          })
          .then(res => res.json())
          .then((result) => {
            console.warn("result", result);
          })

        Payment.find({}, function (err, data) {
            cardname = (data[0].cardname);
            cardnum = (data[0].cardnum);
            month = (data[0].month);
            year = (data[0].year);
            cvv = (data[0].cvv);

            if (req.body.cardname == cardname && req.body.cardnum == cardnum && req.body.month == month && req.body.year == year && req.body.cvv == cvv) {
                

                var doc = new PDFDocument();
                doc.pipe(fs.createWriteStream("./public/document/" + unique_id + ".pdf"));
                doc.fontSize(14).text("You have successfully purchased this item", 200, 90);

                doc
                    .text("Payment Reference Number: " + unique_id, 130, 120)
                    .font("Helvetica-Bold");

                doc
                    .fontSize(9)
                    .font("Helvetica-Bold")
                    .text("Buyer Name: " + cardname, 220, 240)
                    .text("Buyer Email: " + "piyush46749@gmail.com", 220, 260)
                    .text("Price: $" + "55", 220, 320)
                    .text("Item Location:" + "1333 South Park St., Halifax, NS", 220, 340);

                doc.image(__dirname + "/../../public/images/confirmed.png", 210, 150, { width: 170, height: 70 });
                doc.image(__dirname + "/../../public/images/logo.png", 150, 240, { width: 50, height: 50 });
                doc.end();

                const mailOptions = {
                    from: "payment-confirmation@affordly.com",
                    to: "piyush46749@gmail.com",
                    subject: "Your payment on Afford-ly is confirmed",
                    text: "Please find attached payment confirmation file",
                    html: "",
                    attachments: [
                        {
                            filename: unique_id + ".pdf",
                            path: path.join(__dirname, "../../public/document/" + unique_id + ".pdf"),
                            contentType: "application/pdf"
                        }
                    ]
                };
                var req_data = req.body;
                var transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: "affordly123@gmail.com",
                        pass: "afford-ly*123"
                    }
                });

                transporter.sendMail(mailOptions, function (error, cb) {
                    if (error) console.log("Error while sending payment confirmation", error);
                    else {
                        console.log("Mail ender callback:", cb);
                        res.send({
                            code: 200,
                            message: "Payment Successful"
                        });
                    }
                });
            }
            else {
                res.send({
                    code: 400,
                    message: "Payment Failed : Invalid Card"
                });
                    console.log("Invalid Card");
            }
        }
        )  
    }
}

module.exports = paymentController;