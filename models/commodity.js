var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var CommoditySchema=new Schema({
  supplier:{type: Schema.ObjectId, ref:'supplier', required:true},
  commoidtyname:{type: String, required:true},
  //email:{type:String, required:true},
  content:{type:String},
  //phone:{type:string, required:true},
  date:{type:Date},
  genre:[{type:Schema.ObjectId, ref:'Genre' }]
  
});
