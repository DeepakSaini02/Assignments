const express= require('express')

const app= express()
const connect=require('./configs/db')
const productController=require("./controllers/product.controller")
app.use(express.json())

app.use('/products',productController)



app.listen(2020,async()=>{
    await connect()
    console.log('listening on port 2020')
})
