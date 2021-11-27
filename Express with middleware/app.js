const express = require('express')
const books = require("./books.json")
const app = express()


app.use(express.json())
     
const logger = (name) => {
  return (req, res, next) => {
    const originalSendFunc = res.send.bind(res);
    res.send = function (body) {
      body.api_requested_by = name;
      return originalSendFunc(body);
    };
    next();
  };
};
    

app.get("/",logger('deepak saini'),(req,res)=>{
   return res.send({books})
    
})



app.post("/books",logger('deepak saini'),(req,res)=>{
    
    let a=[...books,req.body]
    console.log('req.body:', req.body)
    res.send({a})
   
})

app.get("/books/:id",logger('deepak saini'),(req,res)=>{
    const book =books.filter((el)=>{return el.id==req.params.id})
    res.send({book})
   
})


app.patch("/books/:id",logger('deepak saini'),(req,res)=>{
  
    const edit_book=books.map((book)=> {
        if(book.id ==req.params.id){
            if(req?.body?.id) book.id=req.body.id;
            if(req?.body?.author) book.author = req.body.author;
            if(req?.body?.book_name) book.book_name = req.body.book_name;
            if(req?.body?.pages) book.pages = req.body.pages;
            if(req?.body?.published_year) book.published_year = req.body.published_year;

        }
      return book
    });
   return res.send({edit_book})
    
})

app.delete("/books/:id",logger('deepak saini'),(req,res)=>{
    const book=books.filter((book)=> book.id !=req.params.id);
   return res.send({book})
   
})

app.listen(2323,()=>{
console.log('listening on port 2323')
})

