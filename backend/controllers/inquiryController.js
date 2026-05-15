const Inquiry = require('../models/Inquiry');
const { validationResult } = require('express-validator');

// @desc    Create new inquiry
// @route   POST /api/inquiries
exports.createInquiry = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, phone, email, message } = req.body;
    const inquiry = await Inquiry.create({ name, phone, email, message });

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
