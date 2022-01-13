import { useContext } from "react"
import { Navigate,Route,Routes } from "react-router-dom"
import {AuthContext} from '../contexts/AuthContext'


export const PrivateRoute=({children})=>{
    const {isAuth}=useContext(AuthContext)

if(isAuth=='logout')
return <Navigate to="/login" />

return children

}