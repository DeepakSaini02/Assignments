
const express = require('express')
const Checkout = require('../models/checkout.model')

const router=express.Router()


// find books that are checked out

router.get("",async(req,res)=>{
    try{
        const checkout=await Checkout.find().populate('book_id').lean().exec();
        res.status(200).send({checkout})
    }catch(e){
        res.status(500).json({message:e.message})
    }

})


router.post("",async(req,res)=>{
    try{
        const checkout=await Checkout.create(req.body)
        res.status(201).send(checkout)
    }catch(e){
        res.status(500).json({message:e.message})
    }
    
});

router.get("/:id",async(req,res)=>{
    try{
        const checkout=await Checkout.findById(req.params.id).lean().exec()
        res.status(200).send(checkout)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const checkout=await Checkout.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(checkout)
    }catch(e){
        res.status(500).json({message:e.message})
    }
    
})

router.delete("/:id",async(req,res)=>{
    try{
        const checkout=await Checkout.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(checkout)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})
module.exports=router