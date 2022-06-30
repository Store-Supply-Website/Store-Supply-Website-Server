const upload = require("../models/upload");


const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;

//const url = dbConfig.url;
var dev_db_url = 'mongodb+srv://cs5610:cs5610@storesupplycluster.e0vgk.mongodb.net/store-supply?retryWrites=true&w=majority';
var url = process.env.DB_URI || dev_db_url;

//const baseUrl = "http://localhost:8080/files/";
const port = process.env.PORT || 5000
const baseUrl = "http://localhost:"+port+"/files/";
const mongoClient = new MongoClient(url);

const uploadFiles = async (req, res) => {
    try {
      await upload(req, res);
      console.log(req.files);
  
      if (req.files.length <= 0) {
        return res
          .status(400)
          .send({ message: "You must select at least 1 file." });
      }
  
      return res.status(200).send({
        message: "upload file successfully",
      });
  
      // console.log(req.file);
  
      // if (req.file == undefined) {
      //   return res.send({
      //     message: "You must select a file.",
      //   });
      // }
  
      // return res.send({
      //   message: "File has been uploaded.",
      // });
    } catch (error) { console.log(error);

        if (error.code === "LIMIT_UNEXPECTED_FILE") {
          return res.status(400).send({
            message: "Too many files to upload.",
          });
        }
        return res.status(500).send({
          message: `Error when trying upload many files: ${error}`,
        });
    
        // return res.send({
        //   message: "Error when trying upload image: ${error}",
        // });
      }
};

const getListFiles = async (req, res) => {
        try {
          await mongoClient.connect();
      
          const database = mongoClient.db("store-supply"); //dbConfig.database
          const images = database.collection('photos'+ ".files");
          let fileInfos = [];
      
          if ((await images.estimatedDocumentCount()) === 0) {
              fileInfos = []
          }
      
          let cursor = images.find({})
          await cursor.forEach((doc) => {
            fileInfos.push({
              id: doc._id,
              name: doc.filename,
              url: baseUrl + doc.filename,
            });
          });
      
          return res.status(200).send(fileInfos);
        } catch (error) {
          return res.status(500).send({
            message: error.message,
          });  
        }
    };    

    const download = async (req, res) => {
        try {
          await mongoClient.connect();
          const database = mongoClient.db("store-supply"); //dbConfig.database
          const bucket = new GridFSBucket(database, {
            bucketName: "photos",
          });
      
          let downloadStream = bucket.openDownloadStreamByName(req.params.name);
      
          downloadStream.on("data", function (data) {
            return res.status(200).write(data);
          });
      
          downloadStream.on("error", function (err) {
            return res.status(404).send({ message: "Cannot download the Image!" });
          });
      
          downloadStream.on("end", () => {
            return res.end();
          });
        } catch (error) {
          return res.status(500).send({
            message: error.message,
          });
        }
    };
    
module.exports = {
    uploadFiles,
    getListFiles,
    download,
};