var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var SupplierSchema=new Schema({

  username:{type: String, required:true}, //默认是邮箱
  email:{type:String, required:true},
  firstname:{type:String},
  lastname:{type:String},
  content:{type:String},
  phone:{type:string, required:true},
  
});

SupplierSchema.virtual('url').get(function() {
  return '/catalog/supplier/' + this._id;
});
