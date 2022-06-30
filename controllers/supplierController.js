var Commodity = require('../models/commodity');
var User = require('../models/user');

const { body,validationResult } = require("express-validator");


exports.user_update =async function user_update(req,res){
    console.log("update user");

    try{
        const newUser = await User({
            
            username:req.body.username,
            
            phone:req.body.phone,
            address:req.body.address,
            _id:req.body.id  //old id
        });
        User.findByIdAndUpdate(req.body.id, newUser,{}, function(err, query){ //query可以改为newuser
            if(err){
                res.send({
                    status:401,
                    msg:"update user failure"
                })
            }
            else{
                console.log("update user successfully");
                res.send({
                    status:200,
                    data:query,
                    msg:"update user successfully"
                })
            }
            
        });

    }
    catch(err){
        console.log(err);
    }

}

exports.user_detail = async function user_detail(req, res,){

    console.log("show user details");

    try{
        User.findById(req.params.id).exec((err,res)=>{
                if(err){
                    //return handleError(err);
                    res.send({status:401,
                    msg:"cannot find user"})
                } 
                console.log(query);
                res.send({status:200,
                data:query,
                meg:"find user"});
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.user_delete = async function user_delete(req,res){
    console.log("delete user");

    try{
        User.findByIdAndRemove(req.body.id).exec((err,query)=>{
            if(err){
                res.send({
                    status:401,
                    msg:"delete user failure"
                })
            }
            res.send({
                status:200,
                data:query,
                msg: "delete user successfully",
            });
        })
        
    }
    catch(err){
        console.log(err);
    }
}