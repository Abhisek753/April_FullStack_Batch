import React from 'react'

const Child = ({valuechild}) => {
  return (
    <div style={{backgroundColor:"teal"}}>
     <div>Child</div> 
      <h2>Data coming from homepage {valuechild}</h2>
    </div>
     
  )
}

export default Child;