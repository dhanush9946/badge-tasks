import React, { useEffect, useState } from 'react'

function Traffic() {
  const [color,setColor]=useState('red');

  useEffect(()=>{
    let timer;
    if(color==='red'){
      timer=setTimeout(() => {
        setColor('yellow');
      }, 3000);
    }
    else if(color ==='yellow'){
      timer = setTimeout(()=>{
        setColor('green')
      },2000)
    }
    else if(color==='green'){
      timer=setTimeout(()=>{
        setColor('red');
      },2000)
    }

    return ()=> clearTimeout(timer);
  },[color])
  return (
    <div>
      <div style={{height:'60px',width:'60px',borderRadius:'50%', backgroundColor:color==='red'? 'red':'gray'}}>

      </div>

      <div style={{height:'60px',width:'60px',borderRadius:'50%',backgroundColor:color==='yellow'? 'yellow':'gray'}}>

      </div>

      <div style={{height:'60px',width:'60px',borderRadius:'50%',backgroundColor:color==='green'? 'green':'gray'}}>

      </div>
    </div>
  )
}

export default Traffic