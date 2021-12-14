const post = (model)=>async(req,res)=>{
    try{
        const item=await model.create(req.body)
        return res.status(201).send({item})
    }catch(e){
        return res.status(500).send({message:e.message})
    }
}


const getAll=(model)=>async(req,res)=>{

    try{
        const item=await model.find().lean().exec()
        res.status(200).send({item})
    }catch(e){
        res.status(500).send({message:e.message})
    }
}

const getOne=(model)=>async(req,res)=>{
    try{
        const item=await model.findById(req.params.id).lean().exec()
        res.status(200).send({item})
    }catch(e){
        res.status(500).send({message:e.message})
    }
}
const patch=(model)=>async(req,res)=>{
    try{
        const item=await model.findByIdAndUpdate(req.params.id).lean().exec()
        res.status(200).send({item})
    }catch(e){
        res.status(500).send({message:e.message})
    }
}
const Delete=(model)=>async(req,res)=>{
    try{
        const item=await model.findByIdAndDelete(req.params.id).lean().exec()
        res.status(200).send({item})
    }catch(e){
        res.status(500).send({message:e.message})
    }
}

module.exports={post,getAll,getOne,patch,Delete}
