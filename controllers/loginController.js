

const User = require("../models/user");
const express = require('express');
const app = express();

app.post('/', async(req,res)=>{
    console.log("recever from root");
    const user = await User.findOne({email:req.body.email, passowrd: req.body.password});
    if(user !=null){
        //find user in databse
        res.send({user});
        return true;
    }
    else{
        return false;
    }
})
    
app.post('/register',async(req,res) =>{
    console.log("receive info");
    const user = await User.create({
        email:req.body.email,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    })
    res.send(user)
})

//app.listen(3000,() =>{console.log('http://localhost:3000')})


/*
async function register(userInfo = {}){

    const newuser = await User.create(userInfo);

    return newuser
}

module.exports = {
    register,
    login
}*/