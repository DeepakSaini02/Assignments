const mongoose=require('mongoose')

const resultSchema=new mongoose.Schema({
    evaluation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evaluation",
        required:true
    },
    student_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required:true
    },
    result:{type:Number,required:true}
},{
    timestamps:true,
    versionKey:false
})

module.exports= mongoose.model("result",resultSchema)