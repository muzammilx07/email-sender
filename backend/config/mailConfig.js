

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'process.env.SMTP_EMAIL',
        pass: 'uljb qkmd xgzw uzjs'
    }
});

module.exports = transporter;
