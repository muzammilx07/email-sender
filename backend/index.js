// Express server code

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

app.post('/sendEmail', async (req, res) => {
    const { email, subject, text } = req.body;

    try {
        const response = await fetch('https://email-sender-5ky6.onrender.com/v1/sendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if required
            },
            body: JSON.stringify({ email, subject, text }),
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
