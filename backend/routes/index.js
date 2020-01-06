const express = require('express')
const router = express.Router();
const citiesRouter = require('./cities');
const authRouter = require('./auth');

router.use('/cities', citiesRouter);
router.use('/auth', authRouter);

module.exports = router;
