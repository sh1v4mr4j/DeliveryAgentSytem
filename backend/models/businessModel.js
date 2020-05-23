const mongoose=require('mongoose');

const businessSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    type:{type:String,required:true},
    noOfOrders:{type:Number,required:true,default:0}
})

module.exports=mongoose.model('business',businessSchema);