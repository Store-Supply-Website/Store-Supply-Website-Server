var Commodity = require('../models/commodity');

const { body,validationResult } = require("express-validator");


//TODO:ADD find by supplier


exports.commodity_list = async(req,res)=>{

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
            res.send(res);
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_detail = async(req, res)=>{

    console.log("show commodity details");

    try{
        let query = await Commodity.findById(req.params.id);
        query.exec((err,res)=>{
                if(err) return handleError(err);
                console.log(res);
                res.send(res);
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.commodity_create =async(req,res)=>{
    console.log("create commodity");

    try{
        const newCommodity =await Commodity.create({
            supplier:req.body.supplier,
            commodityname:req.body.commodityname,
            content:req.body.content,
            date:Date.now()
        })
        console.log("add new commodity");
        res.json(newCommodity);
    }
    catch(err){
        console.log(err);
    }
}