const express = require('express')
const router = express.Router();
const stationRouter = require('./stations');
const citiesRouter = require('./cities');
const authRouter = require('./auth');

router.use('/stations', stationRouter);
router.use('/cities', citiesRouter);
router.use('/auth', authRouter);

module.exports = router;
