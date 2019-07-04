import React from 'react'
import logo from '../assets/taproomlogo.jpg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/employee">Employee</Link>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/customer">Customer</Link>
      </header>
    </div>
  )
}

export default App
