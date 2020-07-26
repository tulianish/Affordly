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
 * This file is a back-end model for "Raise a Support Ticket" feature.
 *
 * The file is maintaining model for storing the ticket details in database.
 */

const mongoose = require("mongoose");

let supportTicketSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    mode_of_contact: String,
    contact_number: String,
    query: String,
    severity: String,
  },
  {
    timestamps: true,
  },
  { collection: "support_ticket" }
);

module.exports = mongoose.model("support", supportTicketSchema);
