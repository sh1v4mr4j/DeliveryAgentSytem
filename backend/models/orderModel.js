const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    businessId:{type:String,required:true},
    staffId:{type:String,required:true},
    orderName:{type:String,required:true},
    address:{type:String,required:true},
    statusOfDelivery:{type:Number,required:true,default:1}
})

module.exports=mongoose.model('order',orderSchema);