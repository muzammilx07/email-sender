
class Mail {
  constructor(email, subject, text) {
    this.to = email; 
    this.subject = subject;
    this.text = text;
  }
}

module.exports = Mail;
