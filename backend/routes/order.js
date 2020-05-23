const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
const orderModel=require('../models/orderModel.js')
const staffModel=require('../models/staffModel.js')
const businessModel=require('../models/orderModel.js')

router.post('/new',function(req,res){
    const bName=req.body.businessName;
    const newOrder=new orderModel({
        _id:new mongoose.Types.ObjectId,
        businessName:req.body.businessName,
        staffName:null,
        orderName:req.body.orderName,
        orderNumber:req.body.orderNumber,
        address:req.body.address,
        statusOfDelivery:1
    })
    console.log(newOrder)
    orderModel.find()
    .exec()
    .then(order=>{
    newOrder.save();
    res.json({"message":"Order Placed"}).status(200)
    })

})

router.get('/',function(req,res){
    orderModel.find()
    .exec()
    .then(order=>{
        res.json(order).status(200)
    })
})

router.put('/assignStaff',function(req,res){
        const orderName=req.body.orderName;

        orderModel.updateOne({orderName:orderName,staffName:null},{$set:{staffName:req.body.staffName,statusOfDelivery:2}})
        .exec()
        .then(order=>{
            
            let vari;
            staffModel.findOne({name:req.body.staffName})
            .exec()
            .then(staff=>{
                console.log(staff)
                vari=staff.noOfOrder;
                vari=vari+1
                console.log(vari)
                staffModel.updateOne({name:req.body.staffName},{$set:{noOfOrder:vari}})
                .exec()
                .then(respn=>{
                    res.json({"message":"Updated"})
                })
            }).catch(err=>{
                console.log(err)
            })
            
        }).catch(err=>{
            res.json({"message":"Error"}).status(501);
        })
})

module.exports=router;