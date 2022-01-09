import {useEffect, useRef,useState } from "react"
import "./Form.css"

export const Form=({sendData})=>{
  const [form,setForm]=useState(null)
  const ref=useRef(null)
  const [image,setImage]=useState("")

const [allUser,setAllUser]=useState([])

useEffect(()=>{
getList()
},[])

sendData(allUser)

const getList=()=>{
  fetch('http://localhost:3001/users').then((d)=> d.json()).then((res)=>{setAllUser(res);})
}

  const handleChange= async(e)=>{
    let {name,value}=e.target

    if(e.target.type=='file' && ref.current.files[0]){
      let file=ref.current.files[0]
      const base64=await convertBase64(file)
      value=base64
      setImage(base64)
    }
  

    setForm({
      ...form,
      [name]:e.target.type==="checkbox" ? e.target.checked:value
    })
    

  }


  const handleSubmit=e=>{
    e.preventDefault()
   fetch("http://localhost:3001/users", {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
          'Content-Type': 'application/json',
      },
  }).then(()=>{
    getList()
 console.log("alluser",allUser);
  })
  
 
  }


  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return <>
   <form className="form" action="" onSubmit={handleSubmit}>
<input required  onChange={handleChange} name="name" placeholder="enter name" type="text" />
<input required onChange={handleChange} name="age" placeholder="enter age" type="number"/>
<input required onChange={handleChange} name="address" placeholder="enter address" type="text"/>
<select onChange={handleChange} name="depart" id="">
  <option value="hr">hr</option>
  <option value="it">it</option>
  <option value="sales">sales</option>
  <option value="maintain">maintain</option>
</select>
<input required onChange={handleChange} name="salary" placeholder="enter salary" type="number"/>
<label htmlFor="">marital state</label>
<input id="cheak" onChange={handleChange} type="checkbox" checked={null} name='marital' />
<input id="imginput" required name='profile' ref={ref} onChange={handleChange}  type="file" accept="image/png image/jpg" />
<div>
  <img id="prev" src={image} alt="" />
</div>
<input  type="submit" value='submit' />

  </form>
  <div></div>
  </>
}