const path =require('path');
const express =require('express')

const fs = require('fs');

const Gallery= require('../models/gallery.model')
const upload=require('../middlewares/upload')
const router = express.Router()

router.post("/multiple",upload.array("pictures",5),async(req,res)=>{
    const filePaths=req.files.map(file=>file.path)
    try{
    
            const gallery = await Gallery.create({
                user_id:req.body.user_id,
                pictures:filePaths,
            })
            return res.status(201).send({gallery});
    
    }catch(e){
        return res.status(500).json({message:e.message})
    }
    })


    router.get("/multiple", async (req, res) => {
        try {
    
            const gallery = await Gallery.find().lean().exec()
            return res.status(200).send({gallery});
    
        } catch (e) {
            return res.status(500).json({ message: e.message })
        }
    })


    router.delete('/:id', async (req, res) => {
        try {
    const deleteGallery=await Gallery.findById(req.params.id).lean().exec()

           
            console.log()
            deleteGallery.pictures.forEach((el)=>{
                 fs.unlink(el, function (err) {
                    if (err) throw err;
                    console.log('File deleted!');
                });
            })

            const gallery = await Gallery.findByIdAndDelete(req.params.id, { new: true })
            return res.status(200).send({ gallery });
        } catch (e) {
            return res.status(500).json({ message: e.message })
        }
    })


module.exports=router;