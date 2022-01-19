import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { loginError, loginSuccess } from "../Redux/auth/action"

export const Login=()=>{
const [form,setForm]=useState(null)

const dispatch=useDispatch()

    const handleChange=(e)=>{
const {name,value}=e.target
setForm({
    ...form,
    [name]:value
})
    }

const handleSubmit=(e)=>{
    e.preventDefault()

    fetch('https://reqres.in/api/login',{method:"POST",body:JSON.stringify(form)
    ,headers:{
        'Content-Type':'application/json'
    }}).then(d=>d.json()).then((res)=>{
        if(res.token)
        dispatch(loginSuccess(res.token))
        else
        dispatch(loginError(res.error))
    }
).catch((err)=>{
        console.log('e',err);
        dispatch(loginError(err.error))
    })

}

const {isAuth}=useSelector((state)=>({isAuth:state.auth.isAuth}))

if(isAuth)
return <Navigate to='/' />

    return <div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="enter email" onChange={handleChange}   />
        <input type="text" name='password' placeholder="enter pass" onChange={handleChange} />
        <input type="submit" value='submit' />
        </form>
    </div>
}