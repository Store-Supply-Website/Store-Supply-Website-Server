var Commodity = require('../models/commodity');
var User = require('../models/user');


const { body,validationResult } = require("express-validator");


//TODO:ADD find by supplier


exports.commodity_list = async function commodity_list(req,res){

    console.log("show commodity_list");

    try{
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
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_list_supplier = async function commodity_list_supplier(req,res){

    console.log("show commodity_list");

    try{
        let query =await Commodity.find({supplier:res.body.user}).sort({date:-1}).limit(6);
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
                msg:"show supplier's commodity list successfully",
                data:query
            })
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_list_supplierall = async function commodity_list_supplierall(req,res){

    console.log("show commodity_list");

    try{
        let query =await Commodity.find({supplier:res.body.user}).sort({date:-1}).limit(6);
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
                msg:"show supplier's commodity list successfully",
                data:query
            })
        })
    }
    catch(err){
        console.log(err);
    }
}


exports.commodity_detail = async function commodity_detail(req, res){

    console.log("show commodity details");

    try{
        let query = await Commodity.findById(req.params.id);
        query.exec((err,res)=>{
                if(err){
                    //return handleError(err);
                    res.send({status:401,
                    msg:"cannot find commodity"})
                } 
                console.log(res);
                res.send({status:200,
                data:res,
                meg:"find commodity"});
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_search = async function commodity_search(req, res){
    console.log("search commodity");

    try{
        const query = await Commodity.find({commodityname:req.body.commodityname});
        query.exec((err, res)=>{
            if(err){
                res.send({
                    status:401,
                    msg:"cannot find commodity",
                });
            }
            res.send({
                status:200,
                data:query,
                msg:"find commodity successfully",
            });
        });
        
       
    }
    catch(err){
        console.log(err);
    }

}

exports.commodity_create =async function commodity_create(req,res){
    console.log("create commodity");

    try{
        const newCommodity =await Commodity.create({
            supplier:req.body.user,
            commodityname:req.body.commodityname,
            content:req.body.content,
            date:Date.now()
        })
        newCommodity.exec((err,res)=>{
            if(err){
                res.send({
                    status:401,
                    msg:"create failure"
                })
            }
            console.log("add new commodity");
            res.send({
                status:200,
                data:newCommodity,
                msg: "add new commodity successfully",
            });
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_delete = async function commodity_delete(req,res){
    console.log("delete commodity");

    try{
        const deleteCommodity =await Commodity.findByIdAndRemove(req.body.id);
        deleteCommodity.exec((err,res)=>{
            if(err){
                res.send({
                    status:401,
                    msg:"delete commodity failure"
                })
            }
            res.send({
                status:200,
                data:deleteCommodity,
                msg: "delete commodity successfully",
            });
        })
        
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_update = async function commodity_update(req, res){

    try{
        const newCommodity = await Commodity.create({
            supplier:req.body.supplier,
            commodityname:req.body.commodityname,
            content:req.body.content,
            date:Date.now(),
            _id:req.params.id  //old id
        })
        newCommodity.exec((err,res)=>{
            if(err){
                res.send({
                    status:401,
                    msg:"update commodity failure"
                })
            }
            console.log("update commodity successfully");
            res.send({
                status:200,
                data:newCommodity,
                msg:"update commodity successfully"
            })
        });

    }
    catch(err){
        console.log(err);
    }

}