const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { createInquiry, getInquiries } = require('../controllers/inquiryController');

const validateInquiry = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('email').trim().isEmail().withMessage('Please provide a valid email'),
  body('message').trim().notEmpty().withMessage('Message is required')
    .isLength({ max: 1000 }).withMessage('Message cannot exceed 1000 characters')
];

router.post('/', validateInquiry, createInquiry);
router.get('/', getInquiries);

module.exports = router;
