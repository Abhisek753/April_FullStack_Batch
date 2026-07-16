import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
const [fruis,setFruits]=useState([])  ;
const [data,setData]=useState([])  ;  
    const handleSend=(datavalue)=>{
        console.log("this is parent func in parent component",datavalue);
        setFruits(datavalue);
    }
    const handleSend2=(datavalue)=>{
        console.log("this is parent func in parent component",datavalue);
        setData([...data, datavalue]);
      
    }
  return (
    <div>
        <h1>Passing Data from Child to parent (parent)</h1>
        {fruis?.map((el,i)=>(
            <p key={i}>{el}</p>
        ))}
        {data?.map((el,i)=>(
            <p key={i}>{el.name} {el.email}</p>
        ))}
        <Child handleSend={handleSend} handleSend2={handleSend2} />
       
    </div>
  )
}

export default Parent