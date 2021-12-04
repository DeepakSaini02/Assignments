const express= require('express')

const connect=require('./configs/db')
const app= express()

app.use(express.json())
const userController=require("./controllers/user.controller")

app.use('/users',userController)

const start=async()=>{
    await connect()
    app.listen(2099,()=>{
        console.log('listening on port 2099')
    })
}
module.exports=start
