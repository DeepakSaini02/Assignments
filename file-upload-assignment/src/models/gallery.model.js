const mongoose=require('mongoose')

const gallerySchema=new mongoose.Schema({
    pictures:[{type:String,required:true}],
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    }
},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model('gallery',gallerySchema)