const User = require("../models/user");
const express = require('express');
var app= express();
const router = express.Router();
const { saveToDB, readFromDB, readAll, deleteOne } = require('../db.js');
const path = require('path');

const { body,validationResult } = require("express-validator");



const db = require('../db.js');

router.post('/', async(req,res)=>{
    console.log("recever from root");

    try{
        console.log(req.body.email);
        console.log(req.body.password);
        const user = await User.findOne({email:req.body.email, password:req.body.password});
        if(user !=null){
            console.log("find user in databse");
            res.send({
                status:200,
                data:user});
            return true;
        }
        else{
            if(!user) {
                console.log("cannot find");
                return res.send({
                    status:422,
                    message:"user not exist"
                })
            };
        }
    }
    catch(err){
        console.log(err);
    }
    
})

module.exports = router;