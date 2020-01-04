const express = require('express');
const router = express.Router();
const stationController = require('../controllers/stations');

router.get('/', stationController.findAll);

module.exports = router;
