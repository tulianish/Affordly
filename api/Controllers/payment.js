/* Built by PIYUSH PIYUSH (B00844563, piyush@dal.ca) */



var express = require("express");
var router = express.Router();
const { v1: uuidv1 } = require('uuid');
const PDFDocument = require("pdfkit");
const fs = require("fs");
const nodemailer = require("nodemailer");
const path = require("path");
const Payment = require("../Models/payment");


// let fetchedData = "";
// const fetchData = function () {
//     const data = Payment.find({});
//     // .then(result => result.data)
//     // .then(data => {fetchedData = data.month}); // function (err, data) {
//     //   await sleep(1000)

//     console.log(data.month);
//     return data;

// }


const paymentController = {
    payment(req, res) {
        let unique_id = uuidv1();
        // console.log(req.body.cardname);
        // let match = false;
        // let valid_card_data = "";



        // const data = fetchData();
        // console.log("INSIDE_SCOPE - data :" + data);

        // console.log("INSIDE_SCOPE - card_name : " + fetchedData.cardname);
        // Payment.find({})

        // .exec()
        // .then((data) =>  {
        //     console.log("INSIDE_SCOPE - data :" + data)
        //     let valid_card_data = data;
        //     console.log("INSIDE_SCOPE - card_name : "+data.cardname)
        // });

        // async function valid_card_details ()
        // {


        Payment.find({},  function (err, data) {
            // let featchedData = JSON.stringify(data);

            cardname = (data[0].cardname);
            cardnum = (data[0].cardnum);
            month = (data[0].month);
            year = (data[0].year);
            cvv = (data[0].cvv);

            if (req.body.cardname == cardname && req.body.cardnum == cardnum && req.body.month == month && req.body.year == year && req.body.cvv == cvv){
                console.log("Happy")
           

            // console.log(data['month']);
            // console.log("INSIDE_SCOPE - name :" + featchedData[0]['cardname']);


        // console.log("INSIDE_SCOPE - data2 :" + newData)
        // let valeid_card_data = data;
        // console.log("INSIDE_SCOPE - card_name : "+newData.cardname)



        // if (req.body.cardname == data.cardname && req.body.cardnum == data.cardnum && req.body.month == data.month && req.body.year == data.year && req.body.cvv == data.cvv) {
        //     match = true;
        // }
        // });
        // }
        // console.log(cardnum + cardname + month + year + cvv);

        //   piyush = data;
        //  console.log("ABCDEF"+data);
        //   console.log("hack : " + piyush);

        // if (req.body.cardname == data.cardname && req.body.cardnum == data.cardnum && req.body.month == data.month && req.body.year == data.year && req.body.cvv == data.cvv)
        // {

        // router.get ("http://localhost:3000/payment/", function (req, res, next){
        // })


        // const cardData = {
        //     cardname:"Piyush",
        //     cardnum: 1234567891234567,
        //     month:"may",
        //     year:2024,
        //     cvv:123
        // }

        // Payment.create(cardData, function(err, data){
        //     if (err) console.log(err);
        //     console.log("piyush"+data);
        // });


        // Users.find({ _id: user_id }, function(err, data) {
        //   if (err) throw err;
        //   console.log(data);
        //   var user_id = data._id;
        //   var name = data.name;
        //   var email = data.email;
        //   var contact_number = data.contact_number;

        //   Posts.find({ _id: post_id }, function(err, data) {
        //     if (err) throw err;
        //     console.log(data);
        //     var post_id = data._id;
        //     var item_name = data.name;
        //     var price = data.price;
        //     var item_location = data.address;

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

            // doc
            //     .fontSize(9)
            //     .font("Helvetica-Bold")
            //     .text(mode_company, 155, 295)
            //     .text(mode_number, 150, 305);

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
                    console.log("Mail sender callback:", cb);
                    res.send({
                        code: 200,
                        message: "Payment confirmation generated successfully"
                    });
                }
            });
        }
        else {
            console.log("Invalid Card");
        }
        // });
    }
            )}
}

module.exports = paymentController;