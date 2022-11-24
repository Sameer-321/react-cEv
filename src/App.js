//another app.js for ToDo app
import React from 'react'
import Header from './ToDoApp/componentsToDo/Header'
import "./App.css"
import { useState } from 'react'
import Form from './ToDoApp/componentsToDo/Form'
const App=()=> {
    const [input,setInput]=useState("")
    const [todos,setTodos]=useState([])
  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
            <Header />
            </div>
            <div>
                <Form 
                input={input}
                setInput = {setInput}
                todos= {todos}
                setTodos = {setTodos}
                />
            </div>
        </div>
        </div>
  )
}

export default App