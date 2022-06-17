var userArgs = process.argv.slice(2);

var async = require('async')
var Commodity = require('./models/commodity')
var Supplier = require('./models/supplier')




var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var suppliers = []
var commodities = []


function supplierCreate(username, email, content, phone, cb) {
  supplierdetail = {username:username , email: email, content: content, phone: phone}
  
  
  var supplier = new supplier(supplierdetail);
       
  supplier.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Supplier: ' + supplier);
    suppliers.push(supplier)
    cb(null, supplier)
  }  );
}

function commodityCreate(supplier, commoidtyname, content, date, genre, cb) {
    supplierdetail = {supplier:supplier , commodityname: commodityname, content: content, date: date, genre: genre}
    
    
    var commodity = new commodity(commoditydetail);
         
    commodity.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New Commodity: ' + commodity);
      commodities.push(commodity)
      cb(null, commodity)
    }  );
  }