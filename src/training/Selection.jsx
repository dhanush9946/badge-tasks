import React, { useState } from 'react'

function Selection() {
  const options = ['GATE','DSA','JAVA','C++','Web Development']

  const [selected,setSelected]=useState([]);

  const selecting = (e)=>{
    const  value = e.target.value
    if(selected.includes(value)){
     setSelected( selected.filter((item)=>(item !== value)))
    }else{
    setSelected([...selected,value])
    }
  }
  return (
    <div>
      <div>
       <h1>Select options</h1>
        {options.map((option,i)=>(
          <div key={i}>
            <label> <input type="checkbox" value={option} checked={selected.includes(option

            )} onChange={selecting} /> {option}</label>
          </div>
        )
        )}

        <div>
          <h1>selected items</h1>
          {selected.map((s,i)=>(
            <li key={i}>{s}</li>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Selection