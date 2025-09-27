import React, { useState } from 'react'

function Counter() {
  const [state,setState]=useState(0);

  function decre(){
    if(state>0){
      setState(state-1)
    }
  }
  return (
    <div>
      <h1>count:{state}</h1>
      <button onClick={()=>setState(state + 1)}>increment</button>
      <button onClick={()=>decre()}>decrement</button>
      <button onClick={()=>setState(0)}>reset</button>
    </div>
  )
}

export default Counter;