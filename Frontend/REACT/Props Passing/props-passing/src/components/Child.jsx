import React, { useEffect, useState } from 'react'

const Child = ({handleSend,handleSend2}) => {
    const [name,setName]=useState("");
      const [email,setEmail]=useState("");
    const fruits=["Mango","Apple","Orange","Banana","Grapes"];
    console.log("Child Component",fruits);

    const sendData=()=>{
       const dataObject={
        name:name,
        email:email
       }
       handleSend2(dataObject);
       setName("");
       setEmail("");
    }
    useEffect(()=>{
      handleSend(fruits);
    },[]);
  return (
    <div>
        <div>
            <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={sendData}>Send Data to Parent</button>
        </div>
        <p>This is child Component</p>
    </div>
  )
}

export default Child