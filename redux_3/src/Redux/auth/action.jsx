import { LOGIN_ERROR, LOGIN_SUCCESS } from "./actionType"

export const loginSuccess=(token)=>{
    return {
        type:LOGIN_SUCCESS,
        payload:token
    }
}

export const loginError=(err)=>{
    return {
        type:LOGIN_ERROR,
        payload:err
    }
}