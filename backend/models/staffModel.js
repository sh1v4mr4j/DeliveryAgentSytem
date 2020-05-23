const mongoose=require('mongoose')

const staffSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    age:{type:Number,required:true},
    noOfOrder:{type:String,required:true,default:0}
})

module.exports=mongoose.model('staff',staffSchema);