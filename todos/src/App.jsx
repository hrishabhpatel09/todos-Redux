import { useState,useEffect } from 'react'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
// import {connectDB} from './db/server.js'
function App() {
  return (
    <>Redux Toolkit
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
