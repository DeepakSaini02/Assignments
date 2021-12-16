const express=require('express')

const connect=require('./configs/db')
const app=express();

app.use(express.json())

const {register,login}=require("./controllers/auth.controller")
const postController = require("./controllers/post.controller");


app.post("/register",register)

app.post("/login", login);



app.use("/post", postController);


app.listen(2060,async function(){
    await connect()
    console.log('listening on port 2060')
})