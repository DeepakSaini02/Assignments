const express = require('express')

const app = express()

app.use(express.json())

const connect=require("./configs/db")

const userController=require('./controllers/user.controller')
const galleryController=require('./controllers/gallery.controller')

app.use('/users',userController)
app.use('/gallery',galleryController)


app.listen(1997,async(req,res)=>{
    await connect()
    console.log('lisening on port 1997')
})