import React from 'react'
import { Link } from 'react-router-dom'

function EmployeeNav() {
  return(
    <div className="layout">
      <Link to="/employee/new-order" className="link">New Order</Link>
      <Link to="/employee/new-keg" className="link">New Keg</Link>
      <Link to="/employee/search" className="link">Search Kegs</Link>
      <Link to="/employee/edit-keg" className="link">Edit Keg</Link>
    </div>
  )
}

export default EmployeeNav