const express= require('express')

const app= express()
const connect=require('./configs/db')
const userController=require("./controllers/user.controller")
app.use(express.json())

app.use('/users',userController)



app.listen(2021,async()=>{
    await connect()
    console.log('listening on port 2021')
})
