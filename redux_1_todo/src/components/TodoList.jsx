import { useContext, useState } from "react"
import { editTodo, removeTodo, toggleTodo } from "../store/action"
import { EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from "../store/actionTypes"
import { AppContext } from "../store/appContext"
import { store } from "../store/store"
import "./Todolist.css"

export const TodoList=()=>{

    const {dispatch,getState}=useContext(AppContext)
    const { todos } = getState();
    

  
  console.log(todos);

const handleToggle=(a)=>{
 console.log(a);
    dispatch(toggleTodo(a))
}

const handleRemove=(x)=>{
    dispatch(removeTodo(x))
}

const [newTitle,setNewTitle]=useState('')

let heading=document.getElementById('heading')


const handleEdit=(el)=>{
 
    let payload={...el,newTitle:newTitle}
    dispatch(editTodo(payload))
}

function showdata(){
let x=document.getElementById("showdiv").style.display="block"
}
function hideData(){
    let y=document.getElementById("showdiv").style.display="none"

}

    return <div>
  <div className="headdiv">
     
     {
         todos.map((el)=>(
             <div className="first">
                 <p>Title: {el.title}</p>
                <p>Status: {el.status==false?"not done" : 'done'}</p>
                <button onClick={()=>handleToggle(el)}> Toggle</button>
                <button onClick={()=>handleRemove(el)}>Remove</button>
                <button onClick={showdata}>Edit</button>
               
             </div>
         ))
        }
          </div>
          <div>
          {
         todos.map((e)=>(
             <div id="showdiv">
                 <button id="closebtn" onClick={hideData}>Close</button>
                 <h1>Change the Title</h1>
                 <input type="text" placeholder="enter new title" onChange={(e)=>setNewTitle(e.target.value)} id="heading" /> 
                 <button onClick={()=>handleEdit(e)}>OK</button>
             </div>
         ))
     }
          </div>
    
  
    </div>
    
    
    
  
}