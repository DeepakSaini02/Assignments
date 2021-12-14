const express=require('express')
const router= express.Router()

const User=require("../models/user.model")

const crudController=require("./crud.controller")



router.post("",crudController.post(User))
router.get("",crudController.getAll(User))
router.get("/:id",crudController.getOne(User))
router.patch("/:id",crudController.patch(User))
router.delete("/:id",crudController.Delete(User))





// router.get("/users",async(req,res)=>{
//     try{
//         const user=await User.find().lean().exec()
//         res.status(200).send({user})
//     }catch(e){
//         res.status(500).send({message:e.message})
//     }
// })





// router.get("/users/:id",async(req,res)=>{
//     try{
//         const user=await User.findById(req.params.id).lean().exec()
//         res.status(200).send({user})
//     }catch(e){
//         res.status(500).send({message:e.message})
//     }
// })

// router.patch("/users/:id",async(req,res)=>{
//     try{
//         const user=await User.findByIdAndUpdate(req.params.id).lean().exec()
//         res.status(200).send({user})
//     }catch(e){
//         res.status(500).send({message:e.message})
//     }
// })

// router.delete("/users/:id",async(req,res)=>{
//     try{
//         const user=await User.findByIdAndDelete(req.params.id).lean().exec()
//         res.status(200).send({user})
//     }catch(e){
//         res.status(500).send({message:e.message})
//     }
// })

module.exports=router;