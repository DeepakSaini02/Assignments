import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes"

// const init={todos:[]}
export const reducer=(state={todos:[]},{type,payload})=>{
switch(type){
    case ADD_TODO:return{
        ...state,
        todos:[...state.todos,payload]
    }
    case TOGGLE_TODO:return{
        ...state,
        
        todos:state.todos.map(el=>el.title==payload.title ? {...el,status:!payload.status} : el)
    }

    case EDIT_TODO: return{
        ...state,
        todos:state.todos.map((el)=>el.title==payload.title ? {...el,title:payload.newTitle}:el )
    }

    case REMOVE_TODO:return {
        ...state,
        todos:state.todos.filter((el)=>{if(el.title!=payload.title) return el})
    }
    default:
        return state
}

}