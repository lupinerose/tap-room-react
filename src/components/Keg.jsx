import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    kegDetail: {
      backgroundColor: 'white',
      borderRadius: '25px',
      padding: '20px',
      margin: '20px'
    }
})

function Keg(props){
  const classes = styles();
  return(
    <div>
      <div className={classes.kegDetail}>
        <h3>{props.name} -- {props.type} || ${props.pricePint} per Pint || ${props.price8oz} per 8oz || {props.remainingPints} Pints remaining || {props.alcohol}%abv</h3>
        <h4>This beer is...</h4>
        <p className="test">Seasonal? <em>{props.seasonal}</em></p>
        <p className="test">Brewed by <em>{props.brand}</em></p>
        <p className="test">Local to <em>{props.locality}</em></p>
        <p className="test">Brewed in <em>{props.city}{props.state}</em></p>
        <p className="test">In the great <em>{props.country}</em></p>
      </div>
    </div>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  pricePint: PropTypes.string.isRequired,
  price8oz: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alcohol: PropTypes.string.isRequired,
  remainingPints: PropTypes.number.isRequired,
  seasonal: PropTypes.string.isRequired,
  locality: PropTypes.string.isRequired,
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string
}

export default Keg