import React from 'react'
import './StyleSheet.css'
import PropTypes from 'prop-types'

function Nav(props) {
  return(
    <div className="stack">
      {props.view === 'Employee Keg List' &&
        <div>
          <h1 className="center link" onClick={() => {props.onNavigationSelection('New Order')}}>New Order</h1><br/>
          <h1 className="center link" onClick={() => {props.onNavigationSelection('Add New Keg')}}>New Keg</h1><br/>
          <h1 className="center link" onClick={() => {props.onNavigationSelection('Search Kegs')}}>Search Kegs</h1><br/>
          <h1 className="center link" onClick={() => {props.onNavigationSelection('Edit Keg')}}>Edit Keg</h1>
          <h1 className="center link" onClick={() => {props.onNavigationSelection('The Tap Room')}}>Patron View</h1><br/>
        </div>
      }
      {props.view === 'The Tap Room' && 
        <div>
          <h1 className="center link" onClick={() => props.onSortSelection('all')}>Show All</h1><br/>
          <h1 className="center link" onClick={() => props.onSortSelection('seasonal')}>Show Seasonal</h1>
          <h2>Sort Ascending by... </h2>
          <h1 className="center link" onClick={() => props.onSortSelection('alcohol')}>ABV</h1><br/>
          <h1 className="center link" onClick={() => props.onSortSelection('pricePint')}>Price</h1><br/>
        </div>
      }
    </div>
  )
}

Nav.propTypes = {
  view: PropTypes.string.isRequired,
  onNavigationSelection: PropTypes.func.isRequired,
  onSortSelection: PropTypes.func.isRequired
}

export default Nav