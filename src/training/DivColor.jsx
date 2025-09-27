import React, { useState } from 'react'

function DivColor() {
  const [color,setColor]=useState('white');
  return (
    <div>
      <div style={{backgroundColor:color,width:'300px','height':'150px'}}></div>

      <button onClick={()=>setColor('red')}>red</button>
      <button onClick={()=>setColor('green')}>green</button>
      <button onClick={()=>setColor('yellow')}>yellow</button>
    </div>
  )
}

export default DivColor