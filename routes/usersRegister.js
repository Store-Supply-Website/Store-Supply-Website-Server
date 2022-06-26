const User = require("../models/user");
const express = require('express');
var app= express();
const router = express.Router();
const { saveToDB, readFromDB, readAll, deleteOne } = require('../db.js');
const path = require('path');

const { body,validationResult } = require("express-validator");



const db = require('../db.js');
/*
router.post('/', async(req,res)=>{
    console.log("recever from root");
    const user = await User.findOne({email:req.body.username, passowrd: req.body.password});
    if(user !=null){
        //find user in databse
        res.send({user});
        return true;
    }
    else{
        return false;
    }
})*/
    
router.post('/',async(req,res) =>{
    console.log("receive info");
    
    try{

        const user = await User.findOne({email:req.body.email})
        if(user){
            return res.send({
                status:422,
                message:"this email has been registered"
            })
        }
        //const errors = validationResult(req);
        else{
            const newuser =await User.create({
                email:req.body.email,
                username:req.body.username,
                password:req.body.password,
                phone:"",
                address:"",
            })
            console.log("add new user");
            return res.send({
                status:200,
                data:newuser
            })
            
        }
       
        
    }
    catch(err){
        console.log(err);
    }
    /*
    const user = await User.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        
    })
    res.send(user);*/
    
})

module.exports = router;