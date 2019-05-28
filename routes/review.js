const express = require('express');
const router = express.Router();

const ReviewController = require('../controller/review');

router.get('',ReviewController.get);
router.get('/:id',ReviewController.getById);
module.exports = router;
