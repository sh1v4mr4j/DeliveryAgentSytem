const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
const staffModel=require('../models/staffModel.js')

router.get('/:name',function(req,res){
    staffModel.findOne({name:req.body.name})
    .exec()
    .then(staff=>{
        if(staff!=null) res.json(staff)
        else res.json({"message":"Not registered"})
    })
})

router.post('/login',function(req,res){
    console.log("hello3")
    staffModel.findOne({name:req.body.name})
    .exec()
    .then(staff=>{
        if(staff.age==req.body.age) res.json({"message":"Auth successful"});
        else res.json({"message":"Auth Failed"})
    }).catch(err=>{
        res.json({"message":"Auth Failed"})
    })
})
console.log("hello")
router.post('/',function(req,res){
    console.log("hello2")
    const newStaff=new staffModel({
        _id: new mongoose.Types.ObjectId,
        name:req.body.name,
        age:req.body.age,
        noOfOrder:0
    })

    staffModel.find({name:req.body.name})
    .exec()
    .then(staff=>{
        if(staff.length>0) res.json({"message":"Name Already Exist"});
        else{
            newStaff.save();
            res.json({"messsage":"Account Created"});
        }
    }).catch(err=>{
        res.json({"message":"Auth Failed"})
    })
})


module.exports=router;