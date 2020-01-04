const express = require('express')
const router = express.Router();
const stationRouter = require('./stations');

router.use('/stations', stationRouter);

module.exports = router;
