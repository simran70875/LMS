const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "kaursimran517404@gmail.com",
    pass: "kdes irxx suns hrvm",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Error while verifing email ==> ", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

module.exports = transporter;
