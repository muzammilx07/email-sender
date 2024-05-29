const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
require('dotenv').config();


const allowedOrigins = [process.env.ALLOWED_ORIGIN, "http://localhost:8080"];

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

app.use(express.json());
app.use('/v1/', require('./routes/mailRoutes'));

app.listen(port, () => {
  console.log(`App is started at port: ${port}`);
});
