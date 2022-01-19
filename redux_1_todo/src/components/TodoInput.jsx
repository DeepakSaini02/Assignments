import { useContext, useState } from "react"
import { addTodo } from "../store/action"
import { AppContext } from "../store/appContext"

export const TodoInput=()=>{
const [text,setText]=useState('')

const {dispatch,getState} =useContext(AppContext)

const handleChange=()=>{
dispatch(addTodo(text))
console.log(getState())
}
    return <div>
        <input type="text" placeholder="enter todo " value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleChange}>Add Todo</button>
    </div>
}