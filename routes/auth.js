const express = require('express');
const router = express.Router();

const AuthController = require('../controller/auth');

router.get('',AuthController.post);

module.exports = router;
