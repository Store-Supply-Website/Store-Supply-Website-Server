const express = require('express')
var app = express()



// Set up mongoose connection
var mongoose = require('mongoose')

require('dotenv').config()
const port = process.env.PORT || 5000
const cors = require("cors")
app.use(cors())

var dev_db_url = 'mongodb+srv://cs5610:cs5610@storesupplycluster.e0vgk.mongodb.net/store-supply?retryWrites=true&w=majority'
var mongoDB = process.env.DB_URI || dev_db_url
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.send('Hello World!')
})


const usersRegister = require('./routes/usersRegister.js')
app.use('/register', usersRegister)

const usersLogin = require('./routes/usersLogin.js')
app.use('/', usersLogin)



var catalogRouter = require('./routes/catalog.js'); 

app.use('/catalog', catalogRouter); 

app.get('/register', function (req, res) {
    res.send('this is register!')
})



/*
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)

    const db = require('./db.js');
    db.connectToDB();
});
*/
 module.exports = app;

