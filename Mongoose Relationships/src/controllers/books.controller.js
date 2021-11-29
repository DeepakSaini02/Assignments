const express = require('express')
const Book = require('../models/book.model')


const router=express.Router()


router.get("",async(req,res)=>{
    try{
        const book=await Book.find().lean().exec();
        res.status(200).send({book})
    }catch(e){
        res.status(500).json({message:e.message})
    }

})


router.post("",async(req,res)=>{
    try{
        const book=await Book.create(req.body)
        res.status(201).send(book)
    }catch(e){
        res.status(500).json({message:e.message})
    }
    
});

router.get("/:id",async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id).lean().exec()
        res.status(200).send(book)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const book=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(book)
    }catch(e){
        res.status(500).json({message:e.message})
    }
    
})

router.delete("/:id",async(req,res)=>{
    try{
        const book=await Book.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(book)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

module.exports=router