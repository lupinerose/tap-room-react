import React from 'react'
import { Link } from 'react-router-dom'
import './StyleSheet.css'

function EmployeeNav() {
  return(
    <div className="stack">
        <Link to="/employee/new-order" className="center red-text link">New Order</Link><br/>
        <Link to="/employee/new-keg" className="center link">New Keg</Link><br/>
        <Link to="/employee/search" className="center link">Search Kegs</Link><br/>
        <Link to="/employee/edit-keg" className="center link">Edit Keg</Link>
    </div>
  )
}

export default EmployeeNav