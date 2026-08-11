import React from 'react'
import { FaBriefcase, FaClock, FaMapMarkedAlt, FaMoneyBillAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobCard = ({job}) => {
  return (
    <div key={job.id} className='bg-white rounded-md hover:shadow-lg p-6 border border-gray-200'>
       <div className='flex items-start justify-between'>
        <div className='flex gap-4 flex-1'>
          {job.companyLogo && (
            <img src={job.companyLogo} alt={job.company} className='w-16 h-16 rounded-lg object-cover'/>
          )}
          <div className='flex-1'>
            <Link to={`/job/${job.id}`}>
            <h3 className='text-xl font-semibold text-gray-900 hover:text-primary mb-1'>{job.title}</h3>
            </Link>
            <p className='text-gray-600 font-medium mb-3'>{job.company}</p>
            <div className='flex flex-wrap gap-4 text-sm text-gray-600 mb-3'>
              <div className='flex items-center gap-1'>
                <FaBriefcase className='text-gray-400'/>
                <span>{job.experience}</span>
              </div>
                <div className='flex items-center gap-1'>
                <FaMoneyBillAlt className='text-gray-400'/>
                <span>{job.salaryMin}-{job.salaryMox}</span>
              </div>
               <div className='flex items-center gap-1'>
                <FaMapMarkedAlt className='text-gray-400'/>
                <span>{job.location}</span>
              </div>
            </div>
            {/* Tags */}
            <div className='flex flex-wrap gap-2 mb-3'>
              <span>{job.type}</span>
              <span>{job.workMode}</span>
              <span>{job?.category}</span>
            </div>
           {job.description && (
            <p className='text-gray-600 text-sm line-clamp-2'>{job.description}</p>
           )}
          </div>
        </div>
        <div className='text-gray-500 gap-1 flex items-center'>
          <FaClock/>
          <span >{job.postedDate}</span>
        </div>
       </div>
       {/* Footer */}
       <div className='mt-4 pt-4 border-t border-gray-200 flex justify-between items-center'>
        <div className='flex flex-wrap gap-2'>
          {job.skills?.slice(0,3).map((skill,i)=>(
            <span key={i} className='px-2 py-1 text-gray-500 text-sm'>{skill}</span>
          ))}
            {job.skills?.length>3 && (
            <span className='px-2 py-1 text-gray-500 text-sm'>+ {job.skills.length-3} more</span>

            )}
        </div>
        <Link to={`/job/${job.id}`}  className='bg-primary py-2 rounded-lg font-medium'>View Details</Link>
       </div>
    </div>
  )
}

export default JobCard