import React from 'react'
import logo from '../assets/taproomlogo.jpg'
import './StyleSheet.css'
import PropTypes from 'prop-types'

function Welcome(props) {
  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <h1 onClick={() => props.onEmployeeOrPatronClick("Employee Keg List")} className="link">Employee</h1>
        <img src={logo} className="Welcome-logo" alt="logo" />
        <h1 onClick={() => props.onEmployeeOrPatronClick("The Tap Room")} className="link">Patron</h1>
      </header>
    </div>
  )
}

Welcome.propTypes = {
  onEmployeeOrPatronClick: PropTypes.func.isRequired
}

export default Welcome