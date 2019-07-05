import React from 'react'
import EmployeeNav from './EmployeeNav'
import './StyleSheet.css'

function NewKeg() {
  return(
    <div className="layout">
      <div className="navArea">
        <EmployeeNav/>
      </div>
      <div className="pageTitle">
        <h1>Add New Keg</h1>
      </div>
      <div className="kegListArea">
        <div className="formArea">
          <div>
            <label name="beer">Name</label><br/><br/>
            <label name="type">Type</label><br/><br/>
            <label name="alcohol">Alcohol Content</label><br/><br/>
            <label name="brewery">Brewery</label><br/><br/>
          </div>
          <div>
            <input name="beer" type="text"/><br/><br/>
            <input name="type" type="text"/><br/><br/>
            <input name="alcohol" type="text"/><br/><br/>
            <input name="brewery" type="text"/>
          </div>
          <div>
            <label>Seasonal</label><br/><br/>
            <label>Locality</label><br/><br/>
            <label>City</label><br/><br/>
            <label>State</label><br/><br/>
            <label>Country</label>
          </div>
          <div>
            <input name="seasonal" type="text"/><br/><br/>
            <input name="locality" type="text"/><br/><br/>
            <input name="city" type="text"/><br/><br/>
            <input name="state" type="text"/><br/><br/>
            <input name="country" type="text"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewKeg