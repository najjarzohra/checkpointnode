var nodemailer = require('nodemailer');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zahranajjar011@gmail.com',
    pass: 'gmailzohra'
  }
});

var mailOptions = {
  from: 'zahranajjar011@gmail.com',
  to: 'zahranajjar011@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});