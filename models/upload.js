const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require('multer-gridfs-storage');

var dev_db_url = 'mongodb+srv://cs5610:cs5610@storesupplycluster.e0vgk.mongodb.net/store-supply?retryWrites=true&w=majority';
var ori_url = process.env.DB_URI || dev_db_url;


const port = process.env.PORT || 5000
const baseUrl = "http://localhost:"+port+"/files/";

var storage = new GridFsStorage({
  url: ori_url + "store-supply",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg","image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = file.originalname;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: file.originalname
    };
  }
});
var uploadFiles = multer({ storage: storage }).array("file", 10);
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;