import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-logo'>
               <Link to="/">
                TodoApp
               </Link>
            </div>
            <Link to="/add-task">
               <button className='add-task-btn'>Add Task</button>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar