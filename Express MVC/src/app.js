const express= require('express')
const app= express()
app.use(express.json())
const connect=require("./configs/db")


const userController=require('./controllers/user.controller')
const evaluationController=require('./controllers/evaluation.controller')
const resultController=require('./controllers/result.controller')
const studentController=require('./controllers/student.controller')
const topicController=require('./controllers/topic.controller')

app.use("/users",userController)
app.use("/evaluations",evaluationController)
app.use("/results",resultController)
app.use("/students",studentController)
app.use("/topics",topicController)


app.listen(3033,async()=>{
    await connect()
    console.log('listening on port 3033')
})




