import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Select from "react-select"
import { EXPERIENCE_LEVEL, JOB_TYPES, SALARY_RANGES, WORK_MODES } from '../utils/constant'
const Filters = ({onFilterChange,initialFilter}) => {
 const [filters,setFilters]=useState({
  type:initialFilter?.type || "",
  experience:initialFilter?.experience || "",
  workMode:initialFilter?.workMode || "",
 });
const jobTypeOptions=JOB_TYPES.map((type)=>({value:type,label:type}));
const experienceOptions=EXPERIENCE_LEVEL.map((level)=>({value:level,label:level}));
const workModeOptions=WORK_MODES.map((mode)=>({value:mode,label:mode}));
const salaryOptions=SALARY_RANGES.map((range)=>({value:range.value,label:range.label}));


  const clearFilters=()=>{

  }
console.log(WORK_MODES);
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
            <Select options={jobTypeOptions} placeholder="Select Job Type" />
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Experience Level</label>
            <Select options={experienceOptions}/>
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Work Mode</label>
            <Select options={workModeOptions}/>
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Location</label>
            <Select/>
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Salary Range</label>
            <Select options={salaryOptions}/>
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