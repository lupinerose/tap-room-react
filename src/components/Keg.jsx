import React from 'react'
import PropTypes from 'prop-types'
import './Keg.css'

function Keg(props){
  return(
    <div>
      <div className="kegDetail">
        <h3>{props.name} -- {props.type} || ${props.pricePint} per Pint || ${props.price8oz} per 8oz || {props.remainingPints} Pints remaining</h3>
        <h4>This beer is...</h4>
        <p className="test">Seasonal? <em>{props.seasonal}</em></p>
        <p className="test">Brewed by <em>{props.brand}</em></p>
        <p className="test">Local to <em>{props.locality}</em></p>
        <p className="test">Brewed in <em>{props.city}{props.state}</em></p>
        <p className="test">In the great <em>{props.country}</em></p>
        <hr/>
      </div>
    </div>
  )
}

Keg.propTypes = {
  names: PropTypes.string.isRequired,
  pricePint: PropTypes.string.isRequired,
  price8oz: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  remainingPints: PropTypes.string.isRequired,
  seasonal: PropTypes.string.isRequired,
  locality: PropTypes.string.isRequired,
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string
}

export default Keg