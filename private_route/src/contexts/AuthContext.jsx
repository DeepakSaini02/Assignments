import { createContext, useState } from "react";


export const AuthContext=createContext({isAuth:'',userStatus:()=>{}})  //type

export const AuthContextProvider=({children})=>{

    const [isAuth,setAuth]=useState('logout')

    const userStatus=(res)=>{
        if(res.token)
        setAuth("login")
        else
        setAuth('logout')
    }

    return <AuthContext.Provider value={{userStatus,isAuth}}>
        {children }
    </AuthContext.Provider>
}