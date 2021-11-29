const express = require('express')
const Section = require('../models/section.model')
const Book = require('../models/book.model')
const Checkout = require('../models/checkout.model')

const router=express.Router()

// find books in a section

router.get("/:id/books",async(req,res)=>{
    try{
        const section=await Section.findById(req.params.id).lean().exec();
        const book=await Book.find({section_id:section._id}).populate('section_id').lean().exec()
        res.status(200).send({book})
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

// find books in a section that are not checked out
router.get("/:id/books/checkouts",async(req,res)=>{
    try{
      
        const checkout=await Checkout.find().populate('book_id').lean().exec()
       
        const notcheckout=await Book.find({$and:[{section_id:req.params.id},{_id:{$ne:checkout.map((el)=>{return el.book_id._id})}}]}).populate('section_id').lean().exec()
        res.status(200).send({notcheckout})
    }catch(e){
        res.status(500).json({message:e.message})
    }
})



router.get("",async(req,res)=>{
    try{
        const section=await Section.find().lean().exec();
        res.status(200).send({section})
    }catch(e){
        res.status(500).json({message:e.message})
    }

})


router.post("",async(req,res)=>{
    try{
        const section=await Section.create(req.body)
        res.status(201).send(section)
    }catch(e){
        res.status(500).json({message:e.message})
    }
    
});

router.get("/:id",async(req,res)=>{
    try{
        const section=await Section.findById(req.params.id).lean().exec()
        res.status(200).send(section)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const section=await Section.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(section)
    }catch(e){
        res.status(500).json({message:e.message})
    }
    
})

router.delete("/:id",async(req,res)=>{
    try{
        const section=await Section.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(section)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

module.exports=router;