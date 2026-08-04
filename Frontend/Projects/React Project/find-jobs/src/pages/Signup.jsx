import { useState } from 'react';
import { FaBriefcase, FaSuitcase, FaUser, FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signup } from '../services/authService';
const Signup = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    role:"",
    phone:"",
    companyName:""
  });
  const handleSubmit= async(e)=>{
    e.preventDefault();
 
  
    if(formData.password!==formData.confirmPassword){
      toast.error("Password and Confirm Password do not match");
      return;
    }
    if(formData.role==="company" && !formData.companyName){
      toast.error("Please enter your company name");
      return;
    }
    if(formData.password.length<6){
      toast.error("Password must be at least 6 characters long");
      return;
    }
    try{
       const userData={
        name:formData.name,
        email:formData.email,
        password:formData.password,
        role:formData.role,
        phone:formData.phone,
        ...(formData.role==="company" && {companyName:formData.companyName})
       };
       const user=await signup(userData);
       if(user){
        toast.success("Account created successfully");
       }

    }catch(error){
      toast.error("An error occurred while creating the account");
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
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Create your account</h2>
            <p className='mt-2 text-center text-sm text-gray-600'>Already have an account? {" "}
               <Link to="/login" className='font-medium text-blue-600 hover:text-blue-500'>Sign in</Link>

            </p>
        </div> 
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
           <div>
            <label className='block text-gray-700 mb-2 font-medium'>I am a</label>
            <div className='grid grid-cols-2 gap-4'>
                 <label className={`cursor-pointer border-2 rounded-lg p-4 text-center ${formData.role=='jobseeker'?'bg-blue-50 border-blue-600':'border-gray-300'}`}>
                  <input className='sr-only' type='radio' name='role' value="jobseeker"  checked={formData?.role==='jobseeker'} onChange={handleChange} />
                  <FaUser className='mx-auto text-2xl mb-2 text-blue-600'/>
                  <span className='block font-medium text-sm'>Job Seeker</span>
                 </label>
                  <label className={`cursor-pointer border-2 rounded-lg p-4 text-center ${formData.role=='company'?'bg-blue-50 border-blue-600':'border-gray-300'}`}>
                  <input className='sr-only' type='radio' name='role' value="company" checked={formData?.role==='company'} onChange={handleChange} />
                  <FaBriefcase className='mx-auto text-2xl mb-2 text-blue-600'/>
                  <span className='block font-medium text-sm'>Company</span>
                 </label>
            </div>
           </div>
           <div className='space-y-4'>
            {/* Name */}
            <div>  
              <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>
              <div className='relative'>
                <div className=' absolute top-3  left-0 pl-3 flex items-center pointer-events-none'>
                  <FaUser className='text-gray-400'/>
                </div>
                <input id='name' name='name' type='text' required value={formData.name} onChange={handleChange}
                className='appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500  focus:border-blue-500 sm:text-sm'
                placeholder='Enter your full name'
                />
              </div>
            </div>
              {/* Company */}
              {formData.role=='company' && (
                 <div>  
              <label htmlFor='companyName' className='block text-sm font-medium text-gray-700 mb-1'>Company Name</label>
              <div className='relative'>
                <div className=' absolute top-3  left-0 pl-3 flex items-center pointer-events-none'>
                  <FaSuitcase className='text-gray-400'/>
                </div>
                <input id='companyName' name='companyName' type='text' required value={formData.companyName} onChange={handleChange}
                className='appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500  focus:border-blue-500 sm:text-sm'
                placeholder='Enter your company name'
                />
              </div>
            </div>
              )}
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
              <div>  
              <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-1'>Phone Number</label>
              <div className='relative'>
                <div className=' absolute top-3  left-0 pl-3 flex items-center pointer-events-none'>
                  <FaUser className='text-gray-400'/>
                </div>
                <input id='phone' name='phone' type='text' required value={formData.phone} onChange={handleChange}
                className='appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500  focus:border-blue-500 sm:text-sm'
                placeholder='Enter your phone number'
                />
              </div>
            </div>
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
             <div>  
              <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 mb-1'>Confirm Password</label>
              <div className='relative'>
                <div className=' absolute top-3  left-0 pl-3 flex items-center pointer-events-none'>
                  <FaUser className='text-gray-400'/>
                </div>
                <input id='confirmPassword' name='confirmPassword' type='text' required value={formData.confirmPassword} onChange={handleChange}
                className='appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500  focus:border-blue-500 sm:text-sm'
                placeholder='Confirm your password'
                />
              </div>
            </div>
            </div>
            <div>
              <button type='submit' className='bg-blue-300 justify-center px-4 py-2 border border-blue-500 text-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' >Create Account</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup