const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const serverless = require('serverless-http');
const connectDB = require('../backend/config/db');
const errorHandler = require('../backend/middleware/errorHandler');

// Route modules from the backend package
const inquiryRoutes = require('../backend/routes/inquiry');
const newsletterRoutes = require('../backend/routes/newsletter');

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'https://gurukul-preschool.vercel.app',
    credentials: true
  })
);
app.use(express.json());

app.use('/api/inquiries', inquiryRoutes);
app.use('/api/newsletter', newsletterRoutes);

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Gurukul Pre School API is running! 🏫' });
});

app.use(errorHandler);

module.exports = serverless(app);
