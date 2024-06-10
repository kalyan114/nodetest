const express = require('express');
const path = require('path')
const nodemailer = require('nodemailer');
require('dotenv').config();


const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 3000;

//using transporter to setup for gmails
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: {
    name: 'flash light',
    address: process.env.USER
  }, // sender address
  to: ["nani55555lucky@gmail.com"], // list of receivers
  subject: "sent this email using nodemailer from nodetest project in google idx", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
  attachments: [
    {
      filename: 'random.txt',
      path: path.join(__dirname, 'random.txt')
      // content: 'application/pdf'
    }
  ]
};

const sendMail = async(transporter, mailOptions) => {
  try{
    // const info = await transporter.sendMail(mailOptions);
    // console.log("Message sent: %s", info.messageId);
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent!!!');
  }catch(err){
    console.log(err); 
  }
}


sendMail(transporter, mailOptions);

// app.use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('index');
//   // res.render('index.js');
// });

// app.get('/api', (req, res) => {
//   // res.json({"msg": "Hello world"});
//   res.json({"msg": "hi this is my new project"});
// });

// app.listen(port, () => {
//   console.log(`Listening on http://localhost:${port}`);
// })