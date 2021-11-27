const express= require('express')
const mongoose = require('mongoose')

const app=express()
app.use(express.json())

const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/entertainment");
}

const movieSchema=new mongoose.Schema({
    movie_name:{type:String,required:true},
    movie_genre:{type:String,required:true},
    production_year:{type:Number,required:true},
    budget:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true
});




const Movie=mongoose.model('movie',movieSchema);

app.get("/movies",async(req,res)=>{
    try{
        const movie=await Movie.find().lean().exec();
        res.status(200).send({movie})
    }catch(e){
        res.status(500).json({message:e.message})
    }

})


app.post("/movies",async(req,res)=>{
    try{
        const movie=await Movie.create(req.body)
        res.status(201).send(movie)
    }catch(e){
        res.status(500).json({message:e.message})
    }
    
});

app.get("/movies/:id",async(req,res)=>{
    try{
        const movie=await Movie.findById(req.params.id).lean().exec()
        res.status(200).send(movie)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

app.patch("/movies/:id",async(req,res)=>{
    try{
        const movie=await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(movie)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

app.delete("/movies/:id",async(req,res)=>{
    try{
        const movie=await Movie.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(movie)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

app.listen(2324,async ()=>{
    await connect()
    console.log('listening on port 2324')
})