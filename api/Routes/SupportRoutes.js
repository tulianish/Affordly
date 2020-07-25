/**
 * Ownership details
 *
 * Name : Sarabjeet Singh
 * Banner ID : B00847541
 * Contact : sarabjeet.singh@dal.ca
 *
 *
 * Feature Covered:
 *
 * This file is a routes declaration for "Raise a Support Ticket" feature.
 *
 * The file is maintaining routes for backend where front-end will call it.
 */

const express = require("express");
const router = express.Router();
const incident = require("../Controllers/SupportController");

router.route("/sendSupportTicket").post((req, res) => {
  incident.sendMail(req, res);
});

router.route("/createTicket").post((req, res) => {
  incident.generateTicket(req, res);
});

module.exports = router;
