var express = require('express');
var router = express.Router();


// Require our controllers.
var commodity_controller = require('../controllers/commodityController'); 

router.get('/commodity',commodity_controller.commodity_list);