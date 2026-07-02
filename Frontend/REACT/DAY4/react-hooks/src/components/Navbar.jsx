import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    const {theme,toggleTheme}=useContext(ThemeContext);
      const {user}=useContext(UserContext);
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
        <h2>Navbar</h2>
        <h3>My theme is {theme}</h3>
      <div>
        <span style={{marginRight:"20px"}}>{user}</span>
          <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default Navbar