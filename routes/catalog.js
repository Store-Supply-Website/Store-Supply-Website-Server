var express = require('express');
var router = express.Router();


// Require our controllers.
var commodity_controller = require('../controllers/commodityController'); 
var supplier_controller = require("../controllers/supplierController");

router.get('/homepage',commodity_controller.commodity_list);

router.get('/homepage',commodity_controller.commodity_list_supplier);

router.get('/commodity',commodity_controller.commodity_search);

router.get('/commodity',commodity_controller.commodity_list);

router.get('/commodity/:id',commodity_controller.commodity_detail);

router.post('/commodity:id/delete',commodity_controller.commodity_delete);

router.post('/commodity:id/update',commodity_controller.commodity_update);

router.post('/commodity:id/create',commodity_controller.commodity_create);

router.get('/supplier',commodity_controller.commodity_list_supplierall);


module.exports = router;