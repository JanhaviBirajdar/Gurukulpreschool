const Inquiry = require('../models/Inquiry');
const { validationResult } = require('express-validator');
const sendEmail = require('../utils/sendEmail');

// @desc    Create new inquiry
// @route   POST /api/inquiries
exports.createInquiry = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, phone, email, message } = req.body;

    // 1. Save to database
    const inquiry = await Inquiry.create({ name, phone, email, message });

    // 2. Send email notification to principal
    try {
      await sendEmail({ name, phone, email, message });
      console.log(`✅ Email notification sent for inquiry from ${name}`);
    } catch (emailErr) {
      // Log email error but don't fail the request — the inquiry is already saved
      console.error('⚠️ Email notification failed:', emailErr.message);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! We will contact you soon.',
      data: inquiry
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
exports.getInquiries = async (req, res, next) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    next(error);
  }
};
