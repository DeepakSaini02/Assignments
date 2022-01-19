import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes"


export const addTodo=(payload)=>{
    return {
        type:ADD_TODO,
        payload:{
            title:payload,
            status:false
        }
    } 
}

export const toggleTodo=(payload)=>{
    console.log("pay",payload)
    return {
        
        type:TOGGLE_TODO,
        payload
    } 
}

export const editTodo=(payload)=>{
    return {
        type:EDIT_TODO,
        payload
    } 
}

export const removeTodo=(payload)=>{
    return {
        type:REMOVE_TODO,
        payload
    } 
}