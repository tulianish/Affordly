/**
 * Developed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 * 
 */
// This file contais the model for payment collection defined in MongoDB


var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Defining all the components along with its datatype. 
(payment = new Schema({
    cardname: String,
    cardnum: Number,
    month: String,
    year: String,
    cvv: Number
})),
    (Payment = mongoose.model("payment", payment));

module.exports = Payment;