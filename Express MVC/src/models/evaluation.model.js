const mongoose=require('mongoose')

const evaluationSchema=new mongoose.Schema({
    date_of_eval:{type:String,required:true},
    user_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }],
    topic_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"topic",
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model('evaluation',evaluationSchema)