const express = require('express')
const router = express.Router();
const stationRouter = require('./stations');
const citiesRouter = require('./cities');

router.use('/stations', stationRouter);
router.use('/cities', citiesRouter);

module.exports = router;
