const express = require('express');
const router = express.Router();

const LoginController = require('../Login/login.controller');
router.post("/", LoginController.get_login);

router.post("/ResetPasswords",  LoginController.resetPassword)

router.post('/UpdatePasswords/:token' ,LoginController.updatePassword)

router.post('/CheckOtps/', LoginController.getOtp);

module.exports = router;
