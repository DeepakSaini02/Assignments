const express=require('express')

const router= express.Router()

const User=require("../models/user.model")


const sendMail=require("../utils/send-mail")


router.get("",async(req,res)=>{
    try{
        const page = +req.query.page || 1
        const size = +req.query.size || 5

        const skip=(page-1)*size;

        const user=await User.find().skip(skip).limit(size).lean().exec()

        const totalPages=Math.ceil(await User.find().countDocuments())

        res.status(200).send({user,totalPages})
    }catch(e){
        res.status(500).send({message:e.message})
    }
})


router.post("",async(req,res)=>{
    try{

        const user=await User.create(req.body)
        const adminUser=await User.find({roll:"admin"}).lean().exec()
        const adminUserMail=adminUser.map((el)=>{return el.email})
       
       sendMail("abc@server.com",`${user.email}`,`Welcome to ABC system ${user.first_name} ${user.last_name}`,`Hi ${user.first_name} ,Please confirm your email address` ,`<h1>Hi ${user.first_name} ,Please confirm your email address</h1>`)
       sendMail("abc@server.com",adminUserMail,`${user.first_name} ${user.last_name} has registered with us`,`Please welcome ${user.first_name} ${user.last_name}` ,`<h1>Please welcome ${user.first_name} ${user.last_name}</h1>`)
        
        return res.status(201).send({user})
    }catch(e){
        return res.status(500).send({message:e.message})
    }
})


router.get("/:id",async(req,res)=>{
    try{
        const user=await User.findById(req.params.id).lean().exec()
        res.status(200).send({user})
    }catch(e){
        res.status(500).send({message:e.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(200).send({user})
    }catch(e){
        res.status(500).send({message:e.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id).lean().exec()
        res.status(200).send({user})
    }catch(e){
        res.status(500).send({message:e.message})
    }
})

module.exports=router;