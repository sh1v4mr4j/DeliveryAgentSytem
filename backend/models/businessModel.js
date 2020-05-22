const mongoose=require('mongoose')

const businessSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    type:{type:String,required:true}
})

module.exports=mongoose.model('business','businessSchema');