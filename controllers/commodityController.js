var Commodity = require('../models/commodity');
var User = require('../models/user');
var async = require('async');
const fs = require('fs');
const path = require('path');
const md5 = require('md5');
const multer = require("multer");


const { body,validationResult } = require("express-validator");


//TODO:ADD find by supplier


exports.commodity_list = async function commodity_list(req,res){

    console.log("show commodity_list");

    try{
        /*
        let query =await Commodity.find({},'supplier commodityname date').sort({date:-1}).limit(12);
        
        query.exec((err, res)=>{
            if(err) return handleError(err);
            console.log(res);
            if(res==null){
                console.log('commodity not found');
                var err = new Error('commodity not found');
                err.status = 404;
                res.send(err);
            }
            //res.send(res);
            res.send({
                status:200,
                msg:"show commodity list successfully",
                data:query
            })
        })*/
        Commodity.find({}).sort({date:-1}).limit(12).exec((err, query)=>{
            if(err) return handleError(err);
            console.log(query);
            if(query.length==0){
                console.log('commodity not found');
                var err = new Error('commodity not found');
                err.status = 404;
                res.send({status:404,msg:"commodity list is empty"});
            }
            //res.send(res);
            else{
                res.send({
                    status:200,
                    msg:"show commodity list successfully",
                    data:query
                })
            }
            
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_list_supplier = async function commodity_list_supplier(req,res){

    console.log("show commodity_list");

    try{
        Commodity.find({'supplier':req.body.id}).sort({date:-1}).limit(6).exec((err, query)=>{
            if(err) return handleError(err);
            console.log(query);
            if(query.length==0){
                console.log('commodity not found');
                var err = new Error('commodity not found');
                err.status = 404;
                res.send({status:404,msg:"supplier commodity list is empty"});
            }
            //res.send(res);
            else{
                res.send({
                    status:200,
                    msg:"show supplier's commodity list successfully",
                    data:query
                })
            }
            
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_list_supplierall = async function commodity_list_supplierall(req,res){

    console.log("show commodity_list");

    try{
        Commodity.find({'supplier':req.params.id}).sort({date:-1}).exec((err, query)=>{
            if(err) return handleError(err);
            console.log(query);
            if(query.length==0){
                console.log('commodity not found');
                var err = new Error('commodity not found');
                err.status = 404;
                res.send({status:404,msg:"commodity list is empty"});
            }
            else{
                res.send({
                    status:200,
                    msg:"show supplier's commodity list successfully",
                    data:query
                })
            }
            //res.send(res);
        })
    }
    catch(err){
        console.log(err);
    }
}


exports.commodity_detail = async function commodity_detail(req, res){

    console.log("show commodity details");

    try{
        async.parallel({
            commodity: function(callback){
                
                Commodity.findById(req.body.commodityid).populate('supplier').exec(callback);
            },
            supplier: function(callback){
                User.findById(req.body.supplierid).exec(callback);
            },
        },function(err,query){
                if(err){
                    //return handleError(err);
                    res.send({status:401,
                    msg:"cannot find commodity"})
                }
                else{
                    console.log(query);
                    res.send({status:200,
                    data:query,
                    msg:"find commodity successfully"});
                } 
                
        });
        
       
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_search = async function commodity_search(req, res){
    console.log("search commodity");

    try{
       Commodity.find({'commodityname': req.body.commodityname},"commodityname").exec((err, query)=>{
           // Commodity.findById(req.body.id).exec((err, query)=>{
            if(err){
                res.send({
                    status:401,
                    msg:"cannot find commodity",
                });
            }
            else{
                console.log(query);
                res.send({
                    status:200,
                    data:query,
                    msg:"find commodity successfully",
                });
            }
            
        });
        
       
    }
    catch(err){
        console.log(err);
    }

}

exports.commodity_create =async function commodity_create(req,res){
    console.log("create commodity");

    try{
            const newCommodity = await Commodity.create({
                supplier:req.body.user,
                commodityname:req.body.commodityname,
                content:req.body.content,
                date:Date.now(),
                imgUrl:req.body.imgUrl,
            });

            newCommodity.save(function(err){
                if(err){
                    res.send({
                        status:401,
                        msg:"create failure"
                    })
                }
                else{
                    console.log("add new commodity");
                    res.send({
                    status:200,
                            //data:query,
                    msg: "add new commodity successfully",
                    });
                }
                   
            });
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_delete = async function commodity_delete(req,res){
    console.log("delete commodity");

    try{
        Commodity.findByIdAndRemove(req.body.id).exec((err,query)=>{
            if(err){
                res.send({
                    status:401,
                    msg:"delete commodity failure"
                })
            }
            else{
                res.send({
                    status:200,
                    data:query,
                    msg: "delete commodity successfully",
                });
            }
            
        })
        
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_update = async function commodity_update(req, res){

    try{
        const newCommodity = await Commodity({
            
            commodityname:req.body.commodityname,
            content:req.body.content,
            date:Date.now(),
            imgUrl:req.body.imgUrl,
            _id:req.body.id  //old id
        });
        Commodity.findByIdAndUpdate(req.body.id, newCommodity,{}, function(err, query){
            if(err){
                res.send({
                    status:401,
                    msg:"update commodity failure"
                })
            }
            else{
                console.log("update commodity successfully");
                res.send({
                    status:200,
                    data:query,
                    msg:"update commodity successfully"
                })
            }
            
        });
       

    }
    catch(err){
        console.log(err);
    }

}