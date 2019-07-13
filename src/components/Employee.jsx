import KegList from './KegList'
import React from 'react'
import './StyleSheet.css'
import EmployeeNav from './Nav';
import PropTypes from 'prop-types';

function Employee(props) {
  return(
    <div className="layout">
      <div className="navArea">
        <EmployeeNav/>
      </div>
      <div className="pageTitle">
        <h1>Keg List</h1>
      </div>
      <div className="kegListArea">
        <KegList kegList={props.kegList}/>
      </div>
    </div>
  )
}

Employee.propTypes = {
  kegList: PropTypes.array
}

export default Employee