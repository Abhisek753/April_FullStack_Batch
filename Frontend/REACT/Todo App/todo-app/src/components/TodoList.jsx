import React, { useEffect, useState } from 'react'

const TodoList = () => {
  const [task,setTask]=useState([]);

  useEffect(()=>{
   const fetchTasks=async ()=>{
     try{
      const response=await fetch("http://localhost:3000/tasks");
      const data=await response.json();
      setTask(data);
      console.log(data);
     }catch(err){
      console.log(err)
     }
   }
   fetchTasks();
  },[]);
  return (
    <div>
     <h1>My task table will present here</h1>
    </div>
  )
}

export default TodoList