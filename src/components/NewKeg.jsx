import React from 'react'
import './StyleSheet.css'
import PropTypes from 'prop-types'

function NewKeg(props) {
  let _name = null;
  let _type = null;
  let _brand = null;
  let _alcohol = null;
  let _seasonal = null;
  let _locality = null;
  let _city = null;
  let _state = null;
  let _country = null;
  let _pricePint = null;
  let _price8oz = null;
  let _remainingPints = null;


  function handleNewKegFormSubmit(event) {
    event.preventDefault();
    let parsedPintPrice = parseFloat(_pricePint.value)
    let parsed8ozPrice = parseFloat(_price8oz.value)
    let parsedPintsRemaining = parseFloat(_remainingPints.value)
    let parsedABV = parseFloat(_alcohol.value)
    props.onNewKeg({name: _name.value, pricePint: parsedPintPrice, price8oz: parsed8ozPrice, brand: _brand.value, type: _type.value, alcohol: parsedABV, remainingPints: parsedPintsRemaining, seasonal: _seasonal.value, locality: _locality.value, city: _city.value, state: _state.value, country: _country.value})
    _name.value = '';
    _pricePint.value = '';
    _price8oz.value = '';
    _type.value = '';
    _brand.value = '';
    _alcohol.value = '';
    _remainingPints.value = '';
    _seasonal.value = '';
    _locality.value = '';
    _city.value = '';
    _state.value = '';
    _country.value = '';
  }

  return(
    <div className="layout">
      <div className="navArea">
        <div className="stack">
          <div className="center link">
            <h1 onClick={props.onBackButton}>Back</h1>
          </div>
        </div>
      </div>
      <div className="pageTitle">
        <h1>{props.view}</h1>
      </div>
      <div className="kegListArea">
        <form className="formArea" onSubmit={handleNewKegFormSubmit}>
          <div>
            <label name="name">Name</label>
            <input id="name" type="text" ref={(input) => {_name = input;}}/><br/><br/>
            <label name="type">Type</label>
            <select type='text' id='type' ref={(select) => {_type = select;}}>
              <option id='IPA' value="IPA">IPA</option>
              <option id='Red Ale' value="Red Ale">Red Ale</option>
              <option id='Dark Double Alt Ale' value="Dark Double Alt Ale">Dark Double Alt Ale</option>
              <option id='Pale Lager' value="Pale Lager">Pale Lager</option>
              <option id='Lager' value="Lager">Lager</option>
            </select><br/><br/>
            <label name="brand">Brewery</label>
            <input id="brand" type="text" ref={(input) => {_brand = input;}}/>
            <label name="pricePint">Price Per Pint</label>
            <input id="pricePint" type="text" ref={(input) => {_pricePint = input;}}/><br/><br/>
            <label name="price8oz">Price per 8oz</label>
            <input id="price8oz" type="text" ref={(input) => {_price8oz = input;}}/><br/><br/>
            <label name="alcohol">ABV</label>
            <input id="alcohol" type="text" ref={(input) => {_alcohol = input;}}/><br/><br/>
            <label name="remainingPints">Pints Remaining</label>
            <input id="remainingPints" type="text" placeholder='128' ref={(input) => {_remainingPints = input;}}/>
          </div>
          <div>
          <label>Seasonal</label>
            <select type='text' id='seasonal' ref={(select) => {_seasonal = select;}}>
              <option id='yes' value="yes">Yes</option>
              <option id='no' value="no">No</option>
            </select><br/><br/>
            <label>Locality</label>
            <select type='text' id='locality' ref={(select) => {_locality = select;}}>
              <option id='the Midwest' value="the Midwest">the Midwest</option>
              <option id='Earth' value="Earth">Earth</option>
              <option id='State' value="State">State</option>
              <option id='Town' value="Town">Town</option>
              <option id='the Pacific NorthWest' value="the Pacific NorthWest">the Pacific NorthWest</option>
            </select><br/><br/>
            <label>City</label>
            <input id="city" type="text" ref={(input) => {_city = input;}}/><br/><br/>
            <label>State</label>
            <input id="state" type="text" ref={(input) => {_state = input;}}/><br/><br/>
            <label>Country</label>
            <input id="country" type="text" ref={(input) => {_country = input;}}/>
            <button type='submit'>Add Keg</button>
          </div>
        </form>
      </div>
    </div>
  )
}

NewKeg.propTypes = {
  view: PropTypes.string.isRequired,
  onBackButton: PropTypes.func.isRequired,
  onNewKeg: PropTypes.func.isRequired
}

export default NewKeg