const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    businessName:{type:String,required:true},
    staffName:{type:String},
    orderName:{type:String,required:true},
    orderNumber:{type:Number,required:true},
    address:{type:String,required:true},
    statusOfDelivery:{type:Number,required:true,default:1}
})

module.exports=mongoose.model('order',orderSchema);