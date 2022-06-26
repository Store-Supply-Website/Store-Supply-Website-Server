var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var UserSchema=new Schema({

  email:{type:String, required:true}, //email
  username:{type:String},
  password:{type:String, required:true},
  phone:{type:String},
  address:{type:String},
  
},{collection:'User'});

const User = mongoose.model('user',UserSchema);

module.exports = User;