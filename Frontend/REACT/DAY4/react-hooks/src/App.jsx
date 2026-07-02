import { useContext, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import { ThemeContext } from './context/ThemeContext';
import Login from './components/Login';

function App() {
  const {theme,data}=useContext(ThemeContext);

  return (
    <div style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white",}}>
     <Navbar/>
     {data}
     {/* <Counter /> */}
     <Login/>
    </div>
  )
}

export default App
