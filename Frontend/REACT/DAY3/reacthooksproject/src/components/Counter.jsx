import React, { useState } from 'react'

const Counter = () => {
    const [value,setValue]=useState(1);
    const handleAdd=()=>{
        setValue(value+1);
    }
    const handleSubtract=()=>{
          setValue(value-1);
    }
    const reset=()=>{
        setValue(0);
    }
  return (
    <div style={{padding:"50px",backgroundColor:"gray",width:"400px",margin:"auto",textAlign:"center"}}>
        <h1>Counter Application</h1>
          <h2 style={{marginTop:"20px",fontSize:"32px",color:"gold"}}>{value}</h2>
      <div style={{display:"flex",gap:"20px",justifyContent:"center",marginTop:"20px"}}>
          <button style={{backgroundColor:"green",color:"white",padding:"2px 8px"}} onClick={handleAdd}>Add</button>
        
         <button style={{backgroundColor:"red",color:"white",padding:"2px 8px"}} onClick={handleSubtract} disabled={value==0} >Substract</button>
          <button style={{backgroundColor:"Blue",color:"white",padding:"2px 8px"}} onClick={handleSubtract} disabled={value==0} onClick={reset} >Reset</button>
      </div>
    </div>
  )
}

export default Counter