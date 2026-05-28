const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars FIRST before anything else
dotenv.config({ path: require('path').join(__dirname, '../backend/.env') });
dotenv.config(); // also try root .env (for Vercel which injects env vars)

const connectDB = require('../backend/config/db');
const errorHandler = require('../backend/middleware/errorHandler');
const inquiryRoutes = require('../backend/routes/inquiry');

// Connect to MongoDB
connectDB();

const app = express();

// CORS — allow your live domain and localhost
app.use(cors({
  origin: [
    'https://www.gurukulschooltalegaon.in',
    'https://gurukulschooltalegaon.in',
    'https://gurukulpreschool-frontend.vercel.app',
    'http://localhost:5173',
  ],
  credentials: true,
}));

app.use(express.json());

// Routes
app.use('/api/inquiries', inquiryRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Gurukul Pre School API is running! 🏫' });
});

// Global error handler
app.use(errorHandler);

module.exports = app;
