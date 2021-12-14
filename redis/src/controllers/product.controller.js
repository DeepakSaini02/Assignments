
const express =require('express')
const redis=require("../configs/redis.js")
const Product= require('../models/product.model')

// const {createClient} = require('redis');
// const redis = createClient();
// console.log();
// redis.stream._events.connect()  
const router = express.Router()

router.get("",(req,res)=>{
    redis.get("products",async function(err,product){
        console.log(product);
        if(err)
        console.log(err);
        if(product)
        return res.status(200).send(JSON.parse(product))
        const products=await Product.find().lean().exec()
        redis.set("products",JSON.stringify(products))
        return res.status(200).send(products)
    })
})

router.post("",async function(req,res){
    const product=await Product.create(req.body)
    const products=await Product.find().lean().exec()
    redis.set("products",JSON.stringify(products))
    return res.status(201).send(product)
})



router.get("/:id",(req,res)=>{
    redis.get(`products.${req.params.id}`,async(err,product)=>{
        if(err) console.log(err);
        if(product) return res.status(200).send(JSON.parse(product))

        const product1=await Product.findById(req.params.id).lean().exec()
        redis.set(`products.${req.params.id}`,JSON.stringify(product1))
        return res.status(200).send(product1)
    })
})
router.patch("/:id",async(req,res)=>{
    const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
    redis.set(`products.${req.params.id}`,JSON.stringify(product));
    const products=await Product.find().lean().exec()
    redis.set("products",JSON.stringify(products))
    return res.status(200).send(product)

})

router.delete("/:id",async(req,res)=>{
    const product=await Product.findByIdAndDelete(req.params.id)
    redis.del(`products.${req.params.id}`)
    const products=await Product.find().lean().exec()
    redis.set("products",JSON.stringify(products))
    return res.status(200).send(product)
})

module.exports=router;