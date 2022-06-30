const fs = require('fs');
const path = require('path');
const md5 = require('md5');
const multer = require("multer");

const ImageModel = require('../models/image');


module.exports = {
  
  create: function(req, res) {
    console.log("testing upload image");
    var tempPath = req.file.path;
    var imgUrl = req.file.filename;
    var ext = path.extname(req.file.originalname).toLowerCase();
    var targetPath = path.resolve('./public/upload/' + imgUrl );

    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
      fs.rename(tempPath, targetPath, function(err) {
        if (err) throw err;
          const newImg = new ImageModel({
          title: req.body.title,
          description: req.body.description,
          filename: imgUrl + ext,
        });
        newImg.save(function(err, image) {
          if (err) throw err;
          res.send({status:200,msg:"image save successfully",data:image});
          //image.uniqueId);
        });
      });
    } else {
      fs.unlink(tempPath, function(err) {
        if (err) throw err;
        res.json({status:500, msg:'file format is wrong' });
      });
    }
  },

  remove: function(req, res) {
    //ImageModel.findOne({ filename: { $regex: req.params.image_id } }, function(
      ImageModel.findById(req.params.image_id), function(err,image){
      if (err) throw err;
      fs.unlink(path.resolve('./public/upload/' + image.filename), function(
        err,
      ) {
        if (err) throw err;
        CommentModel.remove({ image_id: image._id }, function(err) {
          image.remove(function(err) {
            if (!err) {
              res.json(true);
            } else {
              res.json(false);
            }
          });
        });
      });
    });
  },
  read: function(req, res) {

    const query = ImageModel.findOne({ filename: { $regex: req.params.image_id } }, function(
      err,
      image,
    ) {
      if (err) throw err;
      if (image) {
        res.send({status:200,msg:"find image",data:image});
       

       
      } else {
        res.send({status:400,msg:"cannot find image"});
      }
    });
  },
};