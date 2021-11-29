const express= require('express')

const connect=require('./configs/db')



const app=express()
app.use(express.json())


const sectionController=require('./controllers/sections.controller')
const authorController=require('./controllers/authors.controller')
const bookController=require('./controllers/books.controller')
const checkoutController=require('./controllers/checkouts.controller')

app.use('/sections',sectionController)
app.use('/books',bookController)
app.use('/checkouts',checkoutController)
app.use('/authors',authorController)



app.listen(3032,async ()=>{
    await connect()
    console.log('listening on port 3032')
})