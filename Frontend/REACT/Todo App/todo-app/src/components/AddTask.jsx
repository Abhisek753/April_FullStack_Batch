import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("not-completed");
  const navigate=useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!taskName.trim()||!date){
      alert("Please fill all fields");
    }
    const newTask={
      title:taskName,
      date:date,
      conpleted:status==="completed"
    }
    try{
     const response=await fetch("http://localhost:3000/tasks",{
      method:"POST",
      headers:{
         'Content-Type': 'application/json'
      },
      body:JSON.stringify(newTask)
     });
     if(response){
      alert("Data added successfully");
      navigate("/");
     }else{
      console.log("Failed to add task");
      alert("Failed to add task");
     }
    }catch(err){
      console.log(err)
    }

  };
  return (
    <div className="add-task-container">
      <div className="add-task-card">
        <h2>Add New Task</h2>
     
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskName">Task Name</label>
          <input id="taskName"
           type="text"
           placeholder="Enter task name" 
           value={taskName}
           onChange={(e)=>setTaskName(e.target.value)}
           className="form-input"
           />
        </div>
         <div className="form-group">
          <label htmlFor="date">Date</label>
          <input id="date"
           type="date"
           placeholder="Enter task name" 
           value={date}
           onChange={(e)=>setDate(e.target.value)}
           className="form-input"
           />
        </div>
         <div className="form-group">
          <label htmlFor="status">Task Name</label>
           <select id="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value="not-completed">Not Completed</option>
             <option value="completed">Completed</option>
           </select>
        </div>
        <div className="btns">
          <button className="submit-btn" type="submit">Submit</button>
          <button className="cancel-btn" type="button" onClick={()=>navigate("/")}>Cancel</button>
        </div>
      </form>
       </div>
    </div>
  );
};

export default AddTask;
