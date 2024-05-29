const transporter = require('../config/mailConfig');
const Mail = require('../models/mailModels');

exports.sendMail = (req, res) => {
  const { email, subject, text } = req.body;

  const mailOptions = new Mail(email, subject, text);
  console.log(mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ error: error.toString() });
      }
      console.log("Email sent:", info.response);
      res.status(200).json({ message: 'Email sent: ' + info.response });
  });
};
