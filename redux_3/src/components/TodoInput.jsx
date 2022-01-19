import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../Redux/todos/action"
import {v4 as uuid} from 'uuid'

export const TodoInput=()=>{
const [text,setText]=useState('')

const dispatch=useDispatch()

const handleAdd=()=>{
    const payload={
        title:text,
        status:false,
        id:uuid()
    }
dispatch(addTodo(payload))
}

    return <div>
        <input type="text" placeholder="enter todo" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAdd}>ADD TODO</button>
    </div>
}