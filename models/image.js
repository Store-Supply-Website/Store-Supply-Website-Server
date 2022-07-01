const mongoose = require('mongoose');
const path = require('path');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  commodity:{type: Schema.ObjectId, ref:'Commodity'},
  title: { type: String },
  imgdata: {type: Buffer},
  imgtype:{type:String},
  filename: { type: String },
  
});

ImageSchema.virtual('uniqueId').get(function() {
  return this.filename.replace(path.extname(this.filename), '');
});

module.exports = mongoose.model('Image', ImageSchema);