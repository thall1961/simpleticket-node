'use strict';

var express = require('express');
var router = express.Router();

var eventsController = require('../controllers/events.controller');

/* GET home page. */
router.get('/', eventsController.events_list);

module.exports = router;