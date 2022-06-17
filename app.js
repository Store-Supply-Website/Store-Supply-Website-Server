var app = express();



// Set up mongoose connection
var mongoose = require('mongoose');

require('dotenv').config();

var dev_db_url = 'mongodb+srv://cs5610:cs5610@storesupplycluster.e0vgk.mongodb.net/store-supply?retryWrites=true&w=majority';
var mongoDB = process.env.uri || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));