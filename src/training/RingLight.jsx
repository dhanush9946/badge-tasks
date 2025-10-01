import React, { useEffect, useState } from 'react'

const RingLight = () => {
  const [color,setColor]=useState('violet');
  useEffect(()=>{
    let timer;
    if(color==='violet'){
      timer=setTimeout(()=>{
        setColor('indigo')
      },100)
    }
    if(color==='indigo'){
      timer=setTimeout(()=>{
        setColor('blue')
      },100)
    }
    if(color==='blue'){
      timer=setTimeout(()=>{
        setColor('green')
      },100)
    }
    if(color==='green'){
      timer=setTimeout(()=>{
        setColor('yellow')
      },100)
    }
     if(color==='yellow'){
      timer=setTimeout(()=>{
        setColor('orange')
      },100)
    }
     if(color==='orange'){
      timer=setTimeout(()=>{
        setColor('red')
      },100)
    }
     if(color==='red'){
      timer=setTimeout(()=>{
        setColor('violet')
      },100)
    }
    return ()=>clearTimeout(timer);
  },[color])
  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}> 
      <div style={{height:'80px',width:'80px',borderRadius:'50%',padding:'10px', backgroundColor:color== 'violet'? 'violet':'grey' ,transform:'1.2s'}}></div>
      <div style={{height:'80px',width:'80px',borderRadius:'50%',padding:'10px', backgroundColor:color==='indigo'?'indigo':'grey' ,transform:'1.2s'}}></div>
      <div style={{height:'80px',width:'80px',borderRadius:'50%',padding:'10px', backgroundColor:color==='blue'?'blue':'grey' ,transform:'1.2s'}}></div>
      <div style={{height:'80px',width:'80px',borderRadius:'50%',padding:'10px', backgroundColor:color==='green'?'green':'grey' ,transform:'1.2s'}}></div>
      <div style={{height:'80px',width:'80px',borderRadius:'50%',padding:'10px', backgroundColor:color==='yellow'?'yellow':'grey' ,transform:'1.2s'}}></div>
      <div style={{height:'80px',width:'80px',borderRadius:'50%',padding:'10px', backgroundColor:color==='orange'? 'orange':'grey' ,transform:'1.2s'}}></div>
      <div style={{height:'80px',width:'80px',borderRadius:'50%',padding:'10px', backgroundColor:color==='red'?'red':'grey' ,transform:'1.2s'}}></div>
    </div>
  )
}

export default RingLight