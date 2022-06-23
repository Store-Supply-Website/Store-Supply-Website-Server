var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var CommoditySchema=new Schema({
  supplier:{type: Schema.ObjectId, ref:'user', required:true},
  commoidtyname:{type: String, required:true},
  //email:{type:String, required:true},
  content:{type:String},
  //phone:{type:string, required:true},
  date:{type:Date},
  //num:{type:String},

  //genre:[{type:Schema.ObjectId, ref:'Genre' }]
  
},{collection:'Commodity'});
