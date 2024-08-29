const nodemailer = require("nodemailer");

module.exports.sendEmail = (email, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SEND_MAIL_EMAIL,
      pass: process.env.SEND_MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SEND_MAIL_EMAIL,
    to: email,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });

}