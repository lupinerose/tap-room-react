import KegList from './KegList'
import React from 'react'
import './StyleSheet.css'
import EmployeeNav from './EmployeeNav';
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
        <KegList masterKegList={props.masterKegList}/>
      </div>
    </div>
  )
}

Employee.propTypes = {
  masterKegList: PropTypes.array.isRequired
}

export default Employee