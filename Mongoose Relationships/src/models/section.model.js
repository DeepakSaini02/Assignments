const mongoose = require('mongoose')


const sectionSchema=new mongoose.Schema({
    section_name:{type:String,required:true},
    
},{
    versionKey:false,
    timestamps:true
});

module.exports=mongoose.model('section',sectionSchema);
