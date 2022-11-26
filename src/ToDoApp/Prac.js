import React, { useState } from 'react'

function Prac() {

    const[data,setData]=useState({
      username:'',
      password:''
    })
    const {username,password}=data
    const change=(e)=>{
        setData({
          ...data,[e.target.name]:[e.target.value] 
        })}   
     const osubmit=(e)=>{
        e.PreventDefault()
        console.log(data)
      }
  return (
    <form onSubmit={osubmit}>
      <input type='text' placeholder='username' name='username' value={username}  onChange={change}  />
      <input type='password' placeholder='password' name='password' value={password} onChange={change}   />
    <button type='submit'>Submit</button>
    </form >
  )} 

export default Prac