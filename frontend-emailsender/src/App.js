import './App.css';
import { useState } from 'react';

function App() {
  const url = "http://localhost:8080", "https://email-sender-5ky6.onrender.com";

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    const data = {
      email: email,
      subject: subject,
      text: text,
    };


    const res = await fetch(`${url}/v1/sendMail`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (res.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }

  };

  return (
    <div className="main">
      <h1>Send Mail to the Account</h1>

      <form className="form" onSubmit={sendEmail}>
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="subject">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Enter the Subject here"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="textbox">
          <label htmlFor="paragraph">Enter your paragraph:</label><br />
          <textarea
            id="paragraph"
            name="paragraph"
            rows="10"
            cols="50"
            placeholder="Write your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea><br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
