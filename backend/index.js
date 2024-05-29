const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
require('dotenv').config();

const allowedOrigins = ["https://email-sender-ivory.vercel.app", "http://localhost:3000"]; // Update this with your frontend URL

// Enable CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["POST"],
  credentials: true,
  optionsSuccessStatus: 204
}));

// Parse JSON request bodies
app.use(express.json());

// Define routes
app.use('/v1/', require('./routes/mailRoutes'));

// Start the server
app.listen(port, () => {
  console.log(`App is started at port: ${port}`);
});
