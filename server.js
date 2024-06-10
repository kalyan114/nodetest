const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 3000;

//using transporter to setup for gmails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: {
    name: 'flash light',
    address: process.env.USER,
  }, // sender address
  to: ['nani55555lucky@gmail.com'], // list of receivers
  subject: 'Sent this email using nodemailer from nodetest project in Google idx', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>', // html body
  attachments: [
    {
      filename: 'random.txt',
      path: path.join(__dirname, 'random.txt'),
    },
  ],
};

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent!!!');
  } catch (err) {
    console.log(err);
  }
};

sendMail(transporter, mailOptions);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
