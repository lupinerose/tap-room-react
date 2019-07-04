import React from 'react'
import { Link } from 'react-router-dom'
import './EmployeeNav.css'

function EmployeeNav() {
  return(
    <div className="stack">
        <Link to="/employee/new-order" className="center">New Order</Link><br/>
        <Link to="/employee/new-keg" className="center">New Keg</Link><br/>
        <Link to="/employee/search" className="center">Search Kegs</Link><br/>
        <Link to="/employee/edit-keg" className="center">Edit Keg</Link>
    </div>
  )
}

export default EmployeeNav