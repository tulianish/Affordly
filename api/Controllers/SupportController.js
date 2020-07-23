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
 * This file is a controller/backend logic for "Raise a Support Ticket" feature.
 *
 * The file is maintaining logic for services running at backend when front-end calls them.
 */

const support = require("../Models/SupportModel");
const nodemailer = require("nodemailer"); //Handling email sending process for new tickets.
const { v4: uuidv4 } = require("uuid");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "affordly123@gmail.com",
    pass: "afford-ly*123",
  },
});

let id = uuidv4();

const incidentController = {
  // mail sending function
  sendMail(req, res) {
    var mailOptions = {
      from: "affordly123@gmail.com",
      to: req.body.email,
      subject: `Affordly - Support ticket : #${id}`,
      text: `Greetings ${req.body.name}, \n \n \n Please find below the ticket details for all your future reference. \n \n \
Issue  - ${req.body.query} \n \
Severity - ${req.body.severity} \n \
Preferred Mode of Contact - ${req.body.mode} \n \n \
     
Please note down your ticket-ID from subject for all future conversation. \n\
Our staff will reach you at the earliest.

Thanks, \n \
Support Team, Affordly`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      }
    });
    transporter.close();
    res.sendStatus(200);
  },

  generateTicket(req, res) {
    const ticket = {
      uuid: id,
      username: req.body.name,
      email: req.body.email,
      mode_of_contact: req.body.mode,
      contact_number: req.body.contact_number,
      query: req.body.query,
      severity: req.body.severity,
    };

    support.create(ticket, (err, createdTicket) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          success: false,
          Message: err,
        });
      } else {
        res.status(200).json({
          success: true,
          Message: "New Ticket has been generated in database.",
        });
      }
    });
  },
};

module.exports = incidentController;
