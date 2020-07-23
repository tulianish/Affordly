var mongoose = require("mongoose");
var Schema = mongoose.Schema;

(payment = new Schema({
    cardname: String,
    cardnum: Number,
    month:String,
    year:String,
    cvv: Number
})),
  (Payment = mongoose.model("payment", payment));

module.exports = Payment;