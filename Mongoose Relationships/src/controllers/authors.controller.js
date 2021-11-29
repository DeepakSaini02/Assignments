const express = require('express')
const Author = require('../models/author.model')
const Book = require('../models/book.model')
const Section = require('../models/section.model')


const router=express.Router()




// find books of 1 author inside a section
router.get("/:id/sections/:section_id/books",async(req,res)=>{
    const books=await Book.find({$and:[{author_ids:req.params.id},{section_id:req.params.section_id}]}).populate("section_id").populate("author_ids").lean().exec()
    res.status(200).send({books})
})

// find all books written by an author
router.get("/:id/books",async(req,res)=>{
    try{
        const author=await Author.findById(req.params.id).lean().exec();
        const book=await Book.find({author_ids:author._id}).populate('author_ids').lean().exec()
        res.status(200).send({book})
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const author=await Author.find().lean().exec();
        res.status(200).send({author})
    }catch(e){
        res.status(500).json({message:e.message})
    }

})


router.post("",async(req,res)=>{
    try{
        const author=await Author.create(req.body)
        res.status(201).send(author)
    }catch(e){
        res.status(500).json({message:e.message})
    }
    
});



router.get("/:id",async(req,res)=>{
    try{
        const author=await Author.findById(req.params.id).lean().exec()
        res.status(200).send(author)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const author=await Author.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(author)
    }catch(e){
        res.status(500).json({message:e.message})
    }
    
})

router.delete("/:id",async(req,res)=>{
    try{
        const author=await Author.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(author)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

module.exports=router