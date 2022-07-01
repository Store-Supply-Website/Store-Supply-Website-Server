var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var UserSchema=new Schema({

  email:{type:String, required:true}, 
  username:{type:String},
  password:{type:String, required:true},
  phone:{type:String},
  address:{type:String},
  
},{collection:'User'});

UserSchema.virtual('url').get(function() {
  return '/catalog/supplier/' + this._id;
});

const User = mongoose.model('User',UserSchema);

module.exports = User;