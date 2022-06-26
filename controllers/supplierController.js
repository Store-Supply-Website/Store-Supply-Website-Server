var Commodity = require('../models/commodity');
var User = require('../models/user');

const { body,validationResult } = require("express-validator");


exports.user_update =async function user_update(req,res){
    console.log("update user");

    try{
        const newUser = await User.create({
            email:req.body.email,
            username:req.body.username,
            password:req.body.password,
            phone:req.body.phone,
            address:req.body.address,
            _id:req.params.id  //old id
        })
        newUser.exec((err,res)=>{
            if(err){
                res.send({
                    status:401,
                    msg:"update user failure"
                })
            }
            console.log("update user successfully");
            res.send({
                status:200,
                data:newUser,
                msg:"update user successfully"
            })
        });

    }
    catch(err){
        console.log(err);
    }

}

exports.user_detail = async function user_detail(req, res,){

    console.log("show user details");

    try{
        let query = await User.findById(req.params.id);
        query.exec((err,res)=>{
                if(err){
                    //return handleError(err);
                    res.send({status:401,
                    msg:"cannot find user"})
                } 
                console.log(res);
                res.send({status:200,
                data:res,
                meg:"find user"});
        })
    }
    catch(err){
        console.log(err);
    }
}