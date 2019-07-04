import React from 'react'
import logo from '../assets/taproomlogo.jpg'
import './Welcome.css'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <Link to="/employee" className="link">Employee</Link>
        <img src={logo} className="Welcome-logo" alt="logo" />
        <Link to="/patron" className="link">Patron</Link>
      </header>
    </div>
  )
}

export default Welcome