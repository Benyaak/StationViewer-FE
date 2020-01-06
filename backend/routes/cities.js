const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/citiesController');

router.get('/', citiesController.find);
router.post('/', citiesController.create);
router.put('/:cityId', citiesController.editCity);
router.put('/:cityName/:stationName', citiesController.editCityStation);
router.delete('/:cityId', citiesController.delete);
router.delete('/:cityId/:stationId', citiesController.deleteStationFromCity);

module.exports = router;