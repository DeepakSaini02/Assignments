import { useContext } from "react"
import { Navigate } from "react-router-dom"
import {AuthContext} from '../contexts/AuthContext'

export const Dashboard=()=>{

const {isAuth}=useContext(AuthContext)
if(isAuth=='logout')
return <Navigate to="/login" />

    return <div>
        Welcome to Dashboard
    </div>
}