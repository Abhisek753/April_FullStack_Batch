import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import  Navbar  from '../components/Navbar'

const AppLayout = () => {
  return (
    <div>
        <Navbar/>
        <main style={{minHeight: "80vh",marginTop: "60px"}}>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default AppLayout