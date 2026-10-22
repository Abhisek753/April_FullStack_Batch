import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AppLayout from './layouts/AppLayout';
import "./App.css"
import Appointments from './pages/Appointments';
import Doctors from './pages/Doctors';
import MannageDoctors from './pages/admin/MannageDoctors';
import MannageAppointments from './pages/admin/MannageAppointments';
import DoctorDetails from './pages/DoctorDetails';

function App() {
 

  return (
    <>
   
      <Routes>
        <Route element={<AppLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/admin/doctors" element={<MannageDoctors />} />
        <Route path="/admin/appointments" element={<MannageAppointments />} />
        <Route path="/doctors/:doctorId" element={<DoctorDetails />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
