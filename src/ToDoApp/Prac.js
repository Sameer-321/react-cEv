import React, { useState } from 'react'

function Prac() {

  const  [data,setData]= useState(
    {
      name:"",
      pass:""
    }
  )
  const {name,pass}=data;
  const onChange =(e)=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const Submit=(e)=>{
    e.preventDefault();
    console.log(data)
  }
  


  return (
   
      <div>
       <form onSubmit={Submit}>
      <input type="text" placeholder='Username' value={name} name='name' onChange={onChange} /> 
      
      <input type="text" placeholder='password' value={pass} name='pass' onChange={onChange} />
      
      <button type='submit' >Submit</button>  
    </form>
    </div>
   
    
  )
}

export default Prac