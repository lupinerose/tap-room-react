import React from 'react'
import logo from '../assets/taproomlogo.jpg'
import './StyleSheet.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Welcome(props) {
  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <Link to="/employee" onClick={() => props.onEmployeeOrPatronClick("employee")} className="link">Employee</Link>
        <img src={logo} className="Welcome-logo" alt="logo" />
        <Link to="/patron" onClick={() => props.onEmployeeOrPatronClick("patron")} className="link">Patron</Link>
      </header>
    </div>
  )
}

Welcome.propTypes = {
  onEmployeeOrPatronClick: PropTypes.func.isRequired
}

export default Welcome