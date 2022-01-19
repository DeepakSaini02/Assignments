import {Link} from 'react-router-dom'

export const Navbar=()=>{
    return <div>
        <Link to='/'>Task</Link>
        <Link to='/login'>LOGIN</Link>
    </div>
}