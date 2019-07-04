import KegList from './KegList'
import React from 'react'
import './Employee.css'
import EmployeeNav from './EmployeeNav';

function Employee() {
  return(
    <div className="layout">
      <div className="navArea">
        <EmployeeNav/>
      </div>
      <div className="pageTitle">
        <h1>Keg List</h1>
      </div>
      <div className="kegListArea">
        <KegList/>
      </div>
    </div>
  )
}

export default Employee