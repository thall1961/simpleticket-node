"use strict";

var express = require("express");
var router = express.Router();

var eventsController = require("../controllers/events.controller");

// events
router.get("/", eventsController.events_list);
router.get("/events", eventsController.events_list);

router.get("/settings");

module.exports = router;