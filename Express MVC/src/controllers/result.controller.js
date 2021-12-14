const express=require('express')
const router= express.Router()

const Result=require("../models/result.model")


const crudController=require("./crud.controller")



router.post("",crudController.post(Result))
router.get("",crudController.getAll(Result))
router.get("/:id",crudController.getOne(Result))
router.patch("/:id",crudController.patch(Result))
router.delete("/:id",crudController.Delete(Result))

router.get("/topper/student",async(req,res)=>{
    try{
        const topper=await Result.find().sort({result:-1}).limit(1).populate("student_id").lean().exec()
        res.status(200).send({topper})
    }catch(e){
        res.status(500).send({message:e.message})
    }
})


module.exports=router;