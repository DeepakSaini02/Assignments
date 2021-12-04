const express=require('express')

const router= express.Router()

const User=require("../models/user.model")

const {body,validationResult}=require('express-validator');


const gen=["Male","Female","Others"]

// console.log(body())

router.post("",body('first_name').isLength({min:4,max:10}).withMessage("first name is not valid, please try again"),
body('last_name').isLength({min:4,max:10}).withMessage("last name is not valid, please try again"),
body('email').isEmail().isLength({min:12,max:20}).custom(async (value)=>{
    const userEmail=await User.findOne({email:value}).lean().exec();
    if(userEmail){
        throw new Error("please try with a different email address")
    }
    return true
}),
body('pincode').isDecimal().isLength({min:6,max:6}).withMessage("pincode is not valid, please try again"),
body('age').isDecimal().isLength({min:1,max:100}).withMessage("age should be between 1 to 100, try again"),

body('gender').isIn(['Male', 'Female', 'Others']).withMessage("gender should be male female or others please enter again"),

async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        let newErrors=errors.array().map(({msg,param,location})=>{
            return {[param]:msg}
        })
        return res.status(400).json({errors:newErrors})
    }
    try{

        const user=await User.create(req.body)
       
        return res.status(201).send({user})
    }catch(e){
        return res.status(500).send({message:e.message})
    }
})


router.get("/",async(req,res)=>{
    try{
        const user=await User.find().lean().exec()
        res.status(200).send({user})
    }catch(e){
        res.status(500).send({message:e.message})
    }
})


module.exports=router;