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
        <p className="test">Brewed by <em>{props.brand}</em> from {props.city}{props.state}. 100% local to <em>{props.locality}</em></p>
        <p className="test">Seasonal? <em>{props.seasonal}</em></p>
        <p className="test">Country of Origin: <em>{props.country}</em></p>
      </div>
    </div>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  pricePint: PropTypes.number.isRequired,
  price8oz: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alcohol: PropTypes.number.isRequired,
  remainingPints: PropTypes.number.isRequired,
  seasonal: PropTypes.string.isRequired,
  locality: PropTypes.string.isRequired,
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string
}

export default Keg