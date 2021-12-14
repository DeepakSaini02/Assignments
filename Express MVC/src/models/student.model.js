const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
    roll_no:{type:String,required:true},
    batch:{type:String,required:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    eval_ids:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evaluation",
        required:true
    }]
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("student",studentSchema)