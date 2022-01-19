
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';



export const Home=()=>{

    const {isAuth} = useSelector((state)=>({isAuth:state.auth.isAuth}))
    console.log(isAuth);

    if(!isAuth)
    return <Navigate to='/login' />

return <div>
     <TodoInput />
     <TodoList />
</div>
}