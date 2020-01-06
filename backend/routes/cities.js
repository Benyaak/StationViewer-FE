const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/citiesController');
const authController = require('../controllers/authController');

router.get('/', citiesController.find);
router.post('/', authController.middleware.checkLogin, citiesController.create);
router.put('/:cityId', authController.middleware.checkLogin, citiesController.editCity);
router.put('/:cityName/:stationName', authController.middleware.checkLogin, citiesController.editCityStation);
router.delete('/:cityId', authController.middleware.checkLogin, citiesController.delete);
router.delete('/:cityId/:stationId', authController.middleware.checkLogin, citiesController.deleteStationFromCity);

module.exports = router;