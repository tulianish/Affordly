/**
 * Developed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 * 
 */

//  This file contains the logic to route our share feature logic present in controller

var express = require("express");
var router = express.Router();
const shares = require("../Controllers/share"); //uses the share controller from Controllers folder 

//defining the route
router.route("/").post((req, res) => {
    shares.share(req, res);
});

module.exports = router;