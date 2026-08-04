import { useState } from 'react';
import { FaBriefcase, FaSuitcase, FaUser, FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../services/authService';

const LoginPage = () => {
  const [formData,setFormData]=useState({
    email:"",
    password:"",
   
  });
  const handleSubmit= async(e)=>{
    e.preventDefault();
   
    try{
       const userData={
    
        email:formData.email,
        password:formData.password,

       };
       const user=await login(formData.email, formData.password);
       if(user){
        toast.success("Login successfully");
       }

    }catch(error){
      toast.error("An error occurred while logging in");
      console.error(error);
    }
   }

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})

  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 '>
       <div>
           <div className='flex justify-center'>
               <FaUserPlus className='text-6xl text-blue-600'/>
            </div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Login to your account</h2>
            <p className='mt-2 text-center text-sm text-gray-600'>Don't have an account? {" "}
               <Link to="/signup" className='font-medium text-blue-600 hover:text-blue-500'>Sign up</Link>
            </p>
        </div> 
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
           
           <div className='space-y-4'>
           
           
             
              {/* Email */}
               <div>  
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
              <div className='relative'>
                <div className=' absolute top-3  left-0 pl-3 flex items-center pointer-events-none'>
                  <FaUser className='text-gray-400'/>
                </div>
                <input id='email' name='email' type='email' required value={formData.email} onChange={handleChange}
                className='appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500  focus:border-blue-500 sm:text-sm'
                placeholder='Enter your email address'
                />
              </div>
            </div>
             {/* Phone */}
            
            
            {/* Password */}
             <div>  
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'> Password</label>
              <div className='relative'>
                <div className=' absolute top-3  left-0 pl-3 flex items-center pointer-events-none'>
                  <FaUser className='text-gray-400'/>
                </div>
                <input id='password' name='password' type='text' required value={formData.password} onChange={handleChange}
                className='appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500  focus:border-blue-500 sm:text-sm'
                placeholder='Enter your password'
                />
              </div>
            </div>
            {/* Confirm Password */}
             
            </div>
            <div>
              <button type='submit' className='bg-green-300 justify-center px-4 py-2 border border-blue-500 text-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' >Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage