import { useContext, useState } from "react"
import {AuthContext} from '../contexts/AuthContext';
import './Login.css';
export const Login=()=>{


const {userStatus,isAuth}=useContext(AuthContext)
    const [form,setForm]=useState(null)

    const handleChange=(e)=>{
      let {name,value}=e.target
      setForm({...form,[name]:value})
    }

const handleSubmit=(e)=>{

    e.preventDefault()

fetch('https://reqres.in/api/login',{
    method:"POST",
    body:JSON.stringify(form),
    headers:{
        'Content-Type':'application/json'
    }
}).then((res)=>res.json()).then((d)=>userStatus(d))
}





    return <div >
        <form className="form" action="" onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="enter email id" onChange={handleChange} />
            <input type="text" name="password" placeholder="enter password" onChange={handleChange} />
            <input type="submit" value='Submit' />
        </form>
        <div>{isAuth}</div>
    </div>
}