const mongoose = require('mongoose');
const path = require('path');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  title: { type: String },
  description: { type: String },
  filename: { type: String },
  
});

ImageSchema.virtual('uniqueId').get(function() {
  return this.filename.replace(path.extname(this.filename), '');
});

module.exports = mongoose.model('Image', ImageSchema);