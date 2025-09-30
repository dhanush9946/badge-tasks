import React, { useState } from 'react'

function Color() {
   const [color,setColor]=useState('yellow')
  return (
    <div>
      <div style={{width:'100px',height:'100px',backgroundColor:color}}></div>
      <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} />
    </div>
  )
}

export default Color