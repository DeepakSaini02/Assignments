import { useSelector } from "react-redux"

export const TodoList=()=>{
    const {todos}=useSelector(state=>({todos:state.app.todos}))

return <div>
    {
        todos.map((el)=>(
            <h1>{el.title}</h1>
        ))
    }
</div>
}