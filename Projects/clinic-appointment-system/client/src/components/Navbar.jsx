import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const data=localStorage.getItem("user");
    const navigate=useNavigate();
    const [user,setUser]=useState(JSON.parse(data));
    const logout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");

    }
  return (
   <header className="app-header">
    <NavLink className="brand" to="/">
        <span>DocEase</span>
    </NavLink>
    
    <nav className="main-nav">
        <NavLink to="/doctors">Find a doctors</NavLink>
         {user?.role==="patient" ? (
        <NavLink to="/appointments">Appointments</NavLink>
     ) : null}
         {user?.role==="admin" ? (
        <NavLink to="/admin/doctors">Manage Doctors</NavLink>
     ) : null}
        {user ? (
          <>
            <span className="nav-user-name">Welcome, {user.name}</span>
            <button type="button" className="nav-logout-btn" onClick={logout}>Logout</button></>
        ) : (
            <NavLink to="/login">Sign in</NavLink>
        )}
        
    </nav>
   </header>
  )
}

export default Navbar