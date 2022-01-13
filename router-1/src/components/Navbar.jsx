import {Link} from 'react-router-dom'
import './NavBar.css';

export const Navbar=()=>{

    return <div className='navbar'>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to='/contactus'>Contactus</Link>
        <Link to='/users'>Users</Link>
   
    </div>
}