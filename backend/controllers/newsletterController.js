const Newsletter = require('../models/Newsletter');
const { validationResult } = require('express-validator');

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter
exports.subscribe = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email } = req.body;

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'This email is already subscribed!'
      });
    }

    await Newsletter.create({ email });

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to our newsletter! 🎉'
    });
  } catch (error) {
    next(error);
  }
};
