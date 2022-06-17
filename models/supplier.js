var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var SupplierSchema=new Schema({
  username:{type: Schema.ObjectId, ref:'username', required:true},
  email:{type:String, required:true},
  content:{type:String},
  phone:{type:string, required:true},
  
});
