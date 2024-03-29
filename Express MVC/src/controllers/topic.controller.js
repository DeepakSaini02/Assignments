const express=require('express')
const router= express.Router()

const Topic=require("../models/topic.model")


const crudController=require("./crud.controller")



router.post("",crudController.post(Topic))
router.get("",crudController.getAll(Topic))
router.get("/:id",crudController.getOne(Topic))
router.patch("/:id",crudController.patch(Topic))
router.delete("/:id",crudController.Delete(Topic))


module.exports=router;