const express = require('express');
const router = express.Router();
const otpController = require('../OTP/otp.controller');

router.get('/' , otpController.getOTPList);


module.exports = router;


