const express=require('express')
const mongoose=require('mongoose')
const parser=require('body-parser')
const morgan=require('morgan')
const app=express();
const port=3000;

mongoose.connect("mongodb+srv://Shivam:Shivam@selab-erxmh.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true},function(err){
    if(err)
    {
        console.log("mongoose not connected");
    }
    else{
        console.log("mongoose connected")
    }
})


const business=require('./routes/business.js')
const staff=require('./routes/staff.js')
const order=require('./routes/order.js')


app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use("*",function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    res.set('Access-Control-Allow-Methods', '*');
    next();
})


app.use('/business',business);
app.use('/staff',staff);
app.use('/order',order);



app.listen(port,function(){
    console.log(`Server is listening on ${port}`)
})