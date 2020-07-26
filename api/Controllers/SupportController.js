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
const Document = require("pdfkit");
const fileStream = require("fs");
const path = require("path");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "affordly123@gmail.com",
    pass: "afford-ly*123",
  },
});

//let id = uuidv4();

const incidentController = {
  // mail sending function
  sendMail(req, res) {
    let id = uuidv4();

    // pdf generation logic starts
    var doc = new Document();
    doc.pipe(
      fileStream.createWriteStream(
        "./public/document/SupportTicket_" + id + ".pdf"
      )
    );
    doc.fontSize(12).text("Support Ticket has been raised!", 200, 90);

    doc //printing text on pdf
      .text("Ticket ID: " + id, 130, 120)
      .font("Helvetica-Bold");

    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .text("Name: " + req.body.name, 220, 240)
      .text("Email: " + req.body.email, 220, 260)
      .text("Mode Of Contact: " + req.body.mode, 220, 280)
      .text("Severity: " + req.body.severity, 220, 300)
      .text("Query:" + req.body.query, 220, 320)
      .text("Please save this for all our future reference", 220, 380);

    doc.image(__dirname + "/../../public/images/logo.png", 150, 240, {
      width: 50,
      height: 50,
    });
    doc.end();

    // pdf generation logic ends.

    // mail sending process

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
      attachments: [
        // attaching the pdf
        {
          filename: id + ".pdf",
          path: path.join(
            __dirname,
            "../../public/document/SupportTicket_" + id + ".pdf"
          ),
          contentType: "application/pdf", //type of file going to be attached.
        },
      ],
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      }
    });
    transporter.close();
    res.sendStatus(200).json({
          success: true,
          Message: "New Ticket details have been sent to your email.",
        });;
  },

  // generate the ticket entry in database
  generateTicket(req, res) {
    const ticket = {
      uuid: uuidv4(),
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
