import React, { useEffect, useState } from 'react'

function Timer() {
   const [time,setTime]=useState(0);
   const [running,setrunning]=useState(false);

   useEffect(()=>{
    let interval;
    if(running){
    interval = setInterval(()=>{
      setTime(prev=> prev+1);
    },1000)
  }
    return ()=> clearInterval(interval)
  
   },[running])

   const reseting =()=>{
    setTime(0);
    setrunning(false);
   }
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={()=>setrunning(true)}>start</button>
      <button onClick={()=>setrunning(false)}>stop</button>
      <button onClick={reseting}>reset</button>
    </div>
  )
}

export default Timer