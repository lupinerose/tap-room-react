import React from 'react'
import EmployeeNav from './Nav'
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
            <input id="beer" type="text" ref={(input) => {_beer = input;}}/><br/><br/>
            <select type='text' id='type' ref={(select) => {_type = select;}}>
              <option id='IPA' value="IPA">Yes</option>
              <option id='Red Ale' value="Red Ale">No</option>
              <option id='Dark Double Alt Ale' value="Dark Double Alt Ale">Yes</option>
              <option id='Pale Lager' value="Pale Lager">No</option>
              <option id='Lager' value="Lager">Yes</option>
            </select>
            <input id="alcohol" type="text" ref={(input) => {_alcohol = input;}}/><br/><br/>
            <input id="brewery" type="text" ref={(input) => {_brewery = input;}}/>
          </div>
          <div>
            <label>Seasonal</label><br/><br/>
            <label>Locality</label><br/><br/>
            <label>City</label><br/><br/>
            <label>State</label><br/><br/>
            <label>Country</label>
          </div>
          <div>
          <select type='text' id='seasonal' ref={(select) => {_seasonal = select;}}>
            <option id='yes' value="yes">Yes</option>
            <option id='no' value="no">No</option>
          </select>
          <select type='text' id='locality' ref={(select) => {_locality = select;}}>
            <option id='the Midwest' value="the Midwest">Yes</option>
            <option id='Earth' value="Earth">No</option>
            <option id='State' value="State">Yes</option>
            <option id='Town' value="Town">No</option>
            <option id='the Pacific NorthWest' value="the Pacific NorthWest">Yes</option>
          </select>
            <input id="city" type="text" ref={(input) => {_city = input;}}/><br/><br/>
            <input id="state" type="text" ref={(input) => {_state = input;}}/><br/><br/>
            <input id="country" type="text" ref={(input) => {_country = input;}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewKeg