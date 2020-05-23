const express=require('express')
const router=require('router')
const mongoose=require('mongoose')
const staffModel=require('../models/staffModel.js')
const orderModel=require('../models/orderModel.js')
router.post('/',function(req,res){
    const newBusiness=new businessModel({
        _id:new mongoose.isValidObjectId,
        name:req.body.name,
        type:req.body.type,
        noOfOrders:0
    })
    businessModel.find({name:req.body.name})
    .exec()
    .then(business=>{
        if(businessModel.length>0) res.json({"message":"Name already exist"})
        else{
            newBusiness.save();
            res.json({"message":"Account Created"})
        }
    }).catch(err=>{
        res.json({"message":"Auth Failed"})
    })
})
router.post('/login',function(req,res){
    staffModel.findOne({name:req.body.name})
    .exec()
    .then(user=>{
        if(user!=null){
            if(user.age==req.body.age){
                res.json({"message":"Authentication Successful"}).status(200);
            }else{
                res.json({"message":"Authentication Failed"}).status(200);
            }
        }else{
            res.json({"message":"Authentication Failed"}).status(200);
        }
    })
})
router.get('/:name',function(req,res){
    const name=req.params.name;
    businessModel.findOne({name:name})
    .exec()
    .then(business=>{
        res.json(business);
    })
})

router.


