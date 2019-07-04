import React from 'react'
import EmployeeNav from './EmployeeNav'

function NewOrder() {
  return(
    <div className="layout">
      <div className="navArea">
        <EmployeeNav/>
      </div>
      <div className="pageTitle">
        <h1>New Keg</h1>
      </div>
      <div className="kegListArea">
        <input type="text"/>
      </div>
  </div>
  )
}

export default NewOrder