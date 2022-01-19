import { loadData, saveData } from "../../utils/localStorage"
import { LOGIN_ERROR, LOGIN_SUCCESS } from "./actionType"

const token=loadData('token')

const init={
    isAuth:token?true:false,
    token:token || ''
}

export const authReducer=(state=init,{type,payload})=>{

    switch(type){
        case LOGIN_SUCCESS:{
            saveData('token',payload)
            return {
                ...state,
                isAuth:true,
                token:payload
            }
        }
        case LOGIN_ERROR:{
            return{
                ...state,
                isAuth:false,
                token:'',
            }
        }
        default:return state
    }

}