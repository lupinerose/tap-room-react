import React from 'react'
import PropTypes from 'prop-types'
import './Keg.css'

function Keg(props){
  var styles = {
    // backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }

  var styles2 = {
    color: 'orange'
  }
    
  return(
    <div style={styles}>
      <style jsx>{`
        div {
            background-color: pink;
        }
        `}</style>
      <h3 style={styles2}>{props.name} - {props.type}</h3>
      <p className="test">Price per Pint: <em>${props.pricePint}</em></p>
      <p className="test">Price per 8oz: <em>${props.price8oz}</em></p>
      <p className="test">Remaining Pints: <em>{props.remainingPints}</em></p>
      <p className="test">Seasonal? <em>{props.seasonal}</em></p>
      <h4>This beer is...</h4>
      <p className="test">Brewed by <em>{props.brand}</em></p>
      <p className="test">Local to <em>{props.locality}</em></p>
      <p className="test">Brewed in <em>{props.city}{props.state}</em></p>
      <p className="test">In the great <em>{props.country}</em></p>
      <hr/>
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