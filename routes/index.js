let express = require("express");
let router = express.Router();

let eventsController = require("../controllers/events.controller");
let companiesController = require("../controllers/companies.controller");

// events
router.get("/", eventsController.events_list);
router.get("/events", eventsController.events_list);

router.get("/settings", companiesController.settings);

module.exports = router;
