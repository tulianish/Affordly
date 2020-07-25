/**
 * Developed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 * 
 */

//  This file contains the logic to route our payment feature logic present in controller

var express = require("express");
var router = express.Router();
const payments = require("../Controllers/payment"); //uses the payment controller from Controllers folder 


router.route("/").post((req, res) => {
    payments.payment(req, res);
});

module.exports = router;
