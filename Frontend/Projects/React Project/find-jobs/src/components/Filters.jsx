import React from 'react'
import { FaFilter } from 'react-icons/fa'
import Select from "react-select"
const Filters = () => {

  const clearFilters=()=>{

  }

  return (
    <div className='bg-white rounded-lg shadow-md p-6 sticky top-20'>
       <div className='flex justify-between items-center mb-4'>
        <div className='flex items-center gap-2'>
          <FaFilter className='text-primary'/>
          <h3 className='text-lg font-semibold'>Filters</h3>

        </div>
        <button onClick={clearFilters} className='text-sm text-red-600 gap-1'>Clear All</button>
       </div>
       <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Job Type</label>
            <Select/>
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Experience Level</label>
            <Select/>
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Work Mode</label>
            <Select/>
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Location</label>
            <Select/>
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Salary Range</label>
            <Select/>
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Company</label>
            <Select/>
          </div>
       </div>
    </div>
  )
}

export default Filters