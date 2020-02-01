let express = require('express');
let router = express.Router();

let eventsController = require('../controllers/events.controller');

/* GET home page. */
router.get('/', eventsController.events_list);

module.exports = router;
