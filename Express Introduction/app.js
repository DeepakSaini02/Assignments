const express = require('express')
const app=express()

app.get("/",(req,res)=>{
    console.log('Welcome to Home page')
    const userData=require('./userData')
    return res.json(userData)
})

app.listen(8080,function(){
    console.log('listening on port 8080')
})