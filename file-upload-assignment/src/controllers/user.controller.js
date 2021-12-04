const path = require('path');
const express = require('express')

const fs = require('fs');

const User = require('../models/user.model')
const upload = require('../middlewares/upload')
const router = express.Router()

router.post("/", upload.single('profile_pic'), async (req, res) => {
    try {

        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            profile_pic: req.file.path
        })
        return res.status(201).send({ user });

    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
})

router.get("/", upload.single('profile_pic'), async (req, res) => {
    try {

        const user = await User.find().lean().exec()
        return res.status(200).send({ user });

    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
})

router.patch('/:id', upload.single('profile_pic'), async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
    //   console.log(req.file)

        if(req.file!=undefined){
            fs.unlink(user.profile_pic, function (err) {
                if (err) throw err;
                console.log('File deleted!');
            });

            updateUser=await User.findByIdAndUpdate(req.params.id,{
                profile_pic:req.file.path,
               
            })

        }

        
        updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})

        return res.status(200).send({ updateUser });
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
})



router.delete('/:id', async (req, res) => {
    try {

        const user = await User.findByIdAndDelete(req.params.id, { new: true })
       await fs.unlink(user.profile_pic, function (err) {
            if (err) throw err;
            console.log('File deleted!');
        });
        return res.status(200).send({ user });


    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
})

// router.post("/multiple",upload.any('image_urls'),async(req,res)=>{
//     const filePaths=req.files.map(file=>file.path)
//     try{

//             const product = await Product.create({
//                 name:req.body.name,
//                 price:req.body.price,
//                 image_urls:filePaths,
//             })
//             return res.status(201).send({product});

//     }catch(e){
//         return res.status(500).json({message:e.message})
//     }
//     })

module.exports = router;