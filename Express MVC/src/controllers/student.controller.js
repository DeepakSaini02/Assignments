const express=require('express')
const router= express.Router()

const Student=require("../models/student.model")


const crudController=require("./crud.controller")



router.post("",crudController.post(Student))
router.get("",crudController.getAll(Student))
router.get("/:id",crudController.getOne(Student))
router.patch("/:id",crudController.patch(Student))
router.delete("/:id",crudController.Delete(Student))

router.get("/eval/:eval_ids/",async(req,res)=>{
    try{
        const item=await Student.find({eval_ids:req.params.eval_ids}).lean().exec()
        res.status(200).send({item})
    }catch(e){
        res.status(500).send({message:e.message})
    }
})


module.exports=router;