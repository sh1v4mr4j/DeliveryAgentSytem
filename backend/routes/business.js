const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
const businessModel=require('../models/businessModel.js')
// const orderModel=require('../models/orderModel.js')

router.post('/login',function(req,res){
    businessModel.findOne({name:req.body.name})
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
router.post('/',function(req,res){
    const newBusiness=new businessModel({
        _id: new mongoose.Types.ObjectId,
        name:req.body.name,
        type:req.body.type,
        noOfOrders:0
    })

    //console.log(newBusiness._id)
    businessModel.find({name:req.body.name})
    .exec()
    .then(business=>{
        if(business.length>0) res.json({"message":"Name already exist"})
        else{
            newBusiness.save();
            res.json({"message":"Account Created"})
        }
    }).catch(err=>{
        res.json({"message":"Auth Failed"})
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

module.exports=router;


