const express = require('express');
const router = express.Router();

const LoginController = require('./loginFront.controller');
router.post("/", LoginController.login_user);

module.exports = router;


