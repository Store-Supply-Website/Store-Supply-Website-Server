var express = require('express');
var router = express.Router();
const path = require('path');

var multer = require('multer');
var storage = multer.diskStorage({
    //设置图片上传后存放的路径(默认放在系统临时文件夹中)
    destination: function(req,file,cb){
        cb(null,'./public/photos');
    },
    //设置图片上传后图片的名称(默认随机给一个名字)
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});

const upload = multer({ dest: path.join(__dirname, 'public/upload/temp') });
// Require our controllers.
var commodity_controller = require('../controllers/commodityController'); 
var supplier_controller = require("../controllers/supplierController");
//var upload_controller = require("../controllers/uploadController");
var image_controller = require("../controllers/imageController");

router.get('/homepage',commodity_controller.commodity_list);

router.post('/homepagelist',commodity_controller.commodity_list_supplier);

router.post('/commodity',commodity_controller.commodity_search);


router.get('/commodity/:id',commodity_controller.commodity_detail);

router.post('/commodity/delete',commodity_controller.commodity_delete);

router.post('/commodity/update',commodity_controller.commodity_update);

router.post('/commodity/create',commodity_controller.commodity_create);

router.get('/supplier/:id',commodity_controller.commodity_list_supplierall);

router.get('/supplierdetail/:id',supplier_controller.user_detail);

router.post('/supplier/update',supplier_controller.user_update);

router.post('/supplier/delete',supplier_controller.user_delete);

//router.post('/upload',upload_controller.uploadFiles);

//router.get("/files",upload_controller.getListFiles);

//router.get("files/:name",upload_controller.download);
router.post('/upload',upload.single('file'),image_controller.create);

router.get("/files/:image_id",image_controller.read);

router.get("/files/delete",image_controller.remove);

module.exports = router;