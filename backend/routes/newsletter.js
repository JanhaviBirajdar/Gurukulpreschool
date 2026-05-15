const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { subscribe } = require('../controllers/newsletterController');

const validateEmail = [
  body('email').trim().isEmail().withMessage('Please provide a valid email')
];

router.post('/', validateEmail, subscribe);

module.exports = router;
