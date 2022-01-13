import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';


export default function NavBar() {
    return (
        <div className='navbar'>
            <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/dashboard/setting'>Setting</Link>
       
        </div>
    )
}
