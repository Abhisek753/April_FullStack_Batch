import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Select from "react-select"
import { EXPERIENCE_LEVEL, JOB_TYPES, SALARY_RANGES, WORK_MODES } from '../utils/constant'
const Filters = ({onFilterChange,initialFilter}) => {
 const [filters,setFilters]=useState({
  type:initialFilter?.type || "",
  experience:initialFilter?.experience || "",
  workMode:initialFilter?.workMode || "",
  salary:initialFilter.salary ||""
 });
const jobTypeOptions=JOB_TYPES.map((type)=>({value:type,label:type}));
const experienceOptions=EXPERIENCE_LEVEL.map((level)=>({value:level,label:level}));
const workModeOptions=WORK_MODES.map((mode)=>({value:mode,label:mode}));
const salaryOptions=SALARY_RANGES.map((range)=>({value:range.value,label:range.label}));


  const handleFilterChange=(key,value)=>{
    const newFilters={...filters,[key]:value};
    setFilters(newFilters);
    onFilterChange(newFilters);

  }

  const clearFilters=()=>{
    const emptyFilters={
      type:"",
      experience:"",
      workMode:"",
      salary:""
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);

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
            <Select value={jobTypeOptions.find(opt=>opt.value===filters.type)}  options={jobTypeOptions} onChange={(option)=>handleFilterChange("type",option?.value ||"")}  placeholder="Select Job Type" />
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Experience Level</label>
            <Select value={experienceOptions.find(opt=>opt.value===filters.experience)} options={experienceOptions} onChange={(option)=>handleFilterChange("experience",option?.value ||"")}/>
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Work Mode</label>
            <Select value={workModeOptions.find(opt=>opt.value===filters.workMode)} options={workModeOptions} onChange={(option)=>handleFilterChange("workMode",option?.value ||"")}/>
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Location</label>
            <Select/>
          </div>
           <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Salary Range</label>
            <Select value={salaryOptions.find(opt=>opt.value===filters.salary)} options={salaryOptions} onChange={(option)=>handleFilterChange("salary",option?.value ||"")}/>
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