var mongoose = require('mongoose');


var Schema = mongoose.Schema;


var CommoditySchema=new Schema({
  supplier:{type: Schema.ObjectId, ref:'User',required:true}, 
  commodityname:{type: String, required:true},
  
  content:{type:String},
  
  date:{type:Date},
  
  imgUrl: {type: String},

  //genre:[{type:Schema.ObjectId, ref:'Genre' }]
  
},{collection:'Commodity'});

const Commodity = mongoose.model('Commodity',CommoditySchema);

module.exports = Commodity;
