/* Built by PIYUSH PIYUSH (B00844563, piyush@dal.ca) */


var express = require("express");
var router = express.Router();
const payments = require("../Controllers/payment");


router.route("/").post((req, res) => {
    payments.payment(req, res);
});

module.exports = router;