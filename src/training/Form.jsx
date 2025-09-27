import React, { useState } from 'react'

function Form() {
  const [sumbmissions,setSubmissions]=useState([])
  const [formdata,setFormdata]=useState({name:'',phone:''})
  const [flag,setFlag]=useState(true);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!formdata.name.trim()|| !formdata.phone.trim()){
      alert("please filll the form");
      return;
    }
    setSubmissions([...sumbmissions,formdata])
    

    setFormdata({name:'',phone:''});
    setFlag(false)
  }

  
  
  return (
    
    <div>
     {flag?(
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
         type="text"
         value={formdata.name}
         placeholder='Enter your name'
         onChange={(e)=>setFormdata({...formdata,name:e.target.value})}
         />
         <br />
         <label>Phone No:</label>
         <input 
         type="number" 
         value={formdata.phone}
         placeholder='Enter your phone number'
         onChange={(e)=>setFormdata({...formdata,phone: e.target.value})}
         />
         <br />
         <button type='submit'>Submit</button>
      </form>
      ):(
      <div>
        <ul>
          {sumbmissions.map((s,i)=>(
            <li key={i}>{s.name} - {s.phone}</li>
            
          ))}
        </ul>
        <button onClick={()=>setFlag(true)}>back to form</button>
      </div>
    )
  }

    </div>
   
    
  )
}

export default Form