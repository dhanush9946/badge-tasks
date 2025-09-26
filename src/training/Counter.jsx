import React, { useState } from 'react'

function Counter() {
  const [state,setState]=useState(0);
  return (
    <div>
      <h1>count:{state}</h1>
      <button onClick={()=>setState(state + 1)}>increment</button>
      <button onClick={()=>setState(state - 1)}>decrement</button>
      <button onClick={()=>setState(0)}>reset</button>
    </div>
  )
}

export default Counter