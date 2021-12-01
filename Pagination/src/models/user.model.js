const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    roll:{type:String,default:"user"},

},{
    versionKey:false,
    timestamps:true
})


module.exports=mongoose.model("user",userSchema)