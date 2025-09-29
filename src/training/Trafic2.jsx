import React, { useEffect, useState } from 'react'

function Trafic2() {
  const [light,setLight]=useState('red');

  useEffect(()=>{
    let timer;
    if(light==='red'){
      timer=setTimeout(()=>{
        setLight('yellow')
      },3000)
    }
    if(light==='yellow'){
      timer = setTimeout(()=>{
        setLight('green')
      },2000)
    }
    if(light==='green'){
      timer= setTimeout(()=>{
        setLight('red')
      },2000)
    }
     
    return ()=> clearTimeout(timer)
  },[light])
  return (
    <div>
      <div style={{width:'60px',height:'60px',borderRadius:'50%',backgroundColor:light==='red'? 'red':'gray'}}></div>
      <div style={{width:'60px',height:'60px',borderRadius:'50%',backgroundColor:light==='yellow'? 'yellow':'gray'}}></div>
      <div style={{width:'60px',height:'60px',borderRadius:'50%',backgroundColor:light==='green'? 'green':'gray'}}></div>
    </div>
  )
}

export default Trafic2