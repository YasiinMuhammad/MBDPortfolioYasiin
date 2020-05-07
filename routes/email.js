const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const db = require("../models/email");
require('dotenv').config(); 

router.get('/', function (req, res) {
  res.json({
      status: 'API Its Working'
  });
});

  router.get("/contacts/:contact_id", function(req, res) {
  db.find().then(dbEmails => {
    res.json(dbEmails);
  });
});
//******/ NODE MAILER /******//

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
} 

var transporter = nodemailer.createTransport(transport)

// verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.post('/contacts', (req, res) => {
  // console.log(req.body);

  var name = req.body.name
  var email = req.body.email
  var subject = req.body.subjectLine
  var body = req.body.body
  var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${body}`


  const mailOptions = {
    from: name,
    to: "ymtechStudio@gmail.com",
    subject: 'New Message from Contact Form',
    text: content
  };

  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      // console.error("there was an error: ", err);
    } else {
      // console.log("here is the res: ", res);
    }
  });
  db.create(req.body)
  .then(dbEmails => {
    res.json(dbEmails);
  })
  .catch(err => res.send(err));
});


module.exports = router;