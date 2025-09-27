import React, { useEffect, useState } from 'react'


function SignUp() {
  const [formdata,setFormdata]=useState({name:'',email:'',phone:'',password:'',confirmPassword:''});

  const [submission,setSubmission]=useState([]);

  useEffect(()=>{
    const User=localStorage.getItem('userList')
    if(User){
      setSubmission(JSON.parse(User))
    }
    
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!formdata.name.trim() || !formdata.email.trim() || !formdata.phone.trim()
      || !formdata.password.trim() ||  !formdata.confirmPassword.trim() ){
        alert('please fill the form to continue')
        return ;
      }
      // setSubmission([...submission,formdata])
      const newlist = [...submission,formdata]
      setSubmission(newlist);
      localStorage.setItem('userList',JSON.stringify(newlist));
      setFormdata({name:'',email:'',phone:'',password:'',confirmPassword:''})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
        type="text" 
        placeholder='enter name'
        value={formdata.name}
        onChange={(e)=>setFormdata({...formdata,name:e.target.value})}
        />
        <br />
        <br />
        <label>Email:</label>
        <input 
        type="email"
        placeholder='enter email'
        value={formdata.email}
        onChange={(e)=>setFormdata({...formdata,email:e.target.value})}
        />
        <br />
        <br />
        <label>Phone No:</label>
        <input 
        type="number"
        placeholder='enter phone number'
        value={formdata.phone}
        onChange={(e)=>setFormdata({...formdata,phone:e.target.value})}

         />
         <br />
         <br />
         <label>Password</label>
         <input 
         type="password"
         placeholder='enter password'
         value={formdata.password}
         onChange={(e)=>setFormdata({...formdata,password:e.target.value})}
         />
         <br />
         <br />
         <label>Confirm Password</label>
         <input 
         type="text"
         placeholder='confirm password'
         value={formdata.confirmPassword}
         onChange={(e)=>setFormdata({...formdata,confirmPassword:e.target.value})}
          />
          <button type='submit'>Submit</button>
      </form>

      <div>
        
        <ul>
          {
            
          submission.map((s,i)=>(
            
              <li key={i}>{s.name}-{s.email}</li>
              
            
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SignUp