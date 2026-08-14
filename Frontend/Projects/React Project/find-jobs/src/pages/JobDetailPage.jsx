import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {toast} from "react-toastify"
import { getJobById } from '../services/jobService';
import { FaBriefcase, FaBuilding, FaCalendar, FaMapMarkerAlt, FaMoneyBillWave, FaUser, FaUsers } from 'react-icons/fa';
const JobDetailPage = () => {
  const {id} =useParams();
  const [loading,setLoading]=useState(true);
  const [job,setJob]=useState(null);

const fetchJob=async()=>{
  try{
    setLoading(true);
    const data=await getJobById(id);
    setJob(data);
  }catch(err){
    toast.error("Failed to fetch job details")
  }finally{
    setLoading(false);
  }
}


  useEffect(()=>{
   fetchJob();
  },[id])
  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='container mx-auto px-4 max-w-5xl'>
        {/* Job Header */}
        <div className='bg-white rounded-lg shadow-md p-8 mb-6'>
          <div className='flex  items-start gap-6'>
            {job?.companyLogo && (
              <img src={job.companyLogo} alt={job.company} className='w-24 h-24 rounded-lg  object-cover'/>
            )}
            <div className='flex-1'>
              <h1 className='text-3xl font-bold text-gray-900 mb-2'>{job?.title}</h1>
              <p className='text-xl text-gray-600 mb-4 flex items-center gap-2'>
                <FaBuilding/>
                {job?.company}
              </p>
              <div className='flex flex-wrap gap-4 text-gray-600 mb-4'>
                <div className='flex items-center gap-2'>
                  <FaMapMarkerAlt/>
                  <span>{job?.location}</span>
                </div>
                <div className='flex items-center gap-2' >
                  <FaBriefcase/>
                  <span>{job?.experience}</span>
                </div>
                 <div className='flex items-center gap-2' >
                  <FaMoneyBillWave/>
                  <span>{job?.salaryMin}-{job?.salaryMax}</span>
                </div>
                 <div className='flex items-center gap-2' >
                  <FaCalendar/>
                  <span>{new Date(job?.postedDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className='flex flex-wrap gap-2'>
                <span className='px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium'>{job?.type}</span>
                <span className='px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium'>{job?.workMode}</span>
              </div>
            </div>
            <button className='bg-blue-400 text-white rounded-lg px-8 py-3 hover:bg-blue-600 transition-colors font-medium p'>Apply Now</button>
          </div>
        </div>
        {/* Job Details */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 space-y-6'>
            {/* Discription */}
            <div className='bg-white rounded-lg shadow-md p-6'> 
              <h2 className='text-xl font-bold mb-4'>
                Job Description
              </h2>
              <p className='whitespace-pre-line text-gray-700'>{job?.description}</p>
            </div>
            {job?.requirements && (
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h2 className='text-xl font-bold mb-4'>Requirements</h2>
                <ul className='list-disc list-inside text-gray-700'>
                  {job.requirements.map((req,index)=>(
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* Responsibilities */}
            {job?.responsibilites && (
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h2 className='text-xl font-bold mb-4'>Responsibilities</h2>
                <ul className='list-disc list-inside text-gray-700'>
                  {job.responsibilites.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            {job?.skills && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{job?.company}</h3>
              <p className="text-gray-700">{job?.description}</p>
              {job?.companySize && (
             <div className="flex items-center gap-2 text-gray-600 text-sm mt-4">
              <FaUsers/>
                <p className="text-gray-600">Company Size: {job?.companySize}</p>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default JobDetailPage