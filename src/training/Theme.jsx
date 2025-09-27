import React, { useState } from 'react'

function Theme() {
  const [dark,setDark]=useState(false);
  // const [color,setColor]=useState('white');
  return (
    <div style={{backgroundColor:dark? 'black':'white' ,width:'100vw',height:'100vh'}}>
      <button onClick={()=>setDark(!dark)}>{dark? "white mode":"Dark mode"}</button>
    </div>
  )
}

export default Theme