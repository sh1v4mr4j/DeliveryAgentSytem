const express=require('express')
const router=require('router')
const mongoose=require('mongoose')
const staffModel=require('../models/staffModel.js')

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
