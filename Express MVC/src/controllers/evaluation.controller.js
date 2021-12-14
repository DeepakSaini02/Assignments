const express=require('express')
const router= express.Router()

const Evaluation=require("../models/evaluation.model")


const crudController=require("./crud.controller")



router.post("",crudController.post(Evaluation))
router.get("",crudController.getAll(Evaluation))
router.get("/:id",crudController.getOne(Evaluation))
router.patch("/:id",crudController.patch(Evaluation))
router.delete("/:id",crudController.Delete(Evaluation))


module.exports=router;