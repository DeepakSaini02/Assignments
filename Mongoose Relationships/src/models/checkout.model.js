const mongoose = require('mongoose')

const checkoutSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true,
      },
    
},{
    versionKey:false,
    timestamps:true
});


module.exports=mongoose.model('checkout',checkoutSchema);