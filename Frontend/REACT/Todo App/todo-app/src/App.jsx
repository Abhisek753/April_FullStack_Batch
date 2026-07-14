import { useState } from 'react'
import TodoList from './components/TodoList'
import AddTask from './components/AddTask'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import "./App.css"
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/" element={<TodoList/>}/>
      <Route path="/add-task" element={<AddTask/>} />

   </Routes>
     <ToastContainer autoClose={1000} />
    </>
  )
}

export default App
