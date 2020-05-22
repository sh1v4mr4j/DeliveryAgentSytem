const mongoose=require('mongoose')

const businessSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Name:{type:String,required:true},
    Type:{type:String,required:true}
})

module.exports=mongoose.model('business','businessSchema');