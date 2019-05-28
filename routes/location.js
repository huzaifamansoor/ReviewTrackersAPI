const express = require('express');
const router = express.Router();

const LocationController = require('../controller/location');

router.get('',LocationController.get);

router.get('/:id',LocationController.getById);
module.exports = router;
