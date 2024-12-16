const devicesController = require('../controllers/devices.controller');
const express = require('express');

const router = express.Router();

router.get('/devices', devicesController.getDevices);

module.exports = router;