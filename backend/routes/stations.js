const express = require('express');
const router = express.Router();
const stationController = require('../controllers/stationController');

router.get('/', stationController.find);
router.post('/', stationController.create);
router.put('/:id', stationController.edit);
router.delete('/:id', stationController.delete);

module.exports = router;
