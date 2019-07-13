import React from 'react'
import './StyleSheet.css'
import PropTypes from 'prop-types'

function Nav(props) {
  return(
    <div className="stack">
      {props.view === 'employee' &&
        <div>
          <h1 className="center red-text link" onCLick={() => {props.onNavigationSelection('newOrder')}}>New Order</h1><br/>
          <h1 className="center link" onCLick={() => {props.onNavigationSelection('newKeg')}}>New Keg</h1><br/>
          <h1 className="center link" onCLick={() => {props.onNavigationSelection('searchKegs')}}>Search Kegs</h1><br/>
          <h1 className="center link" onCLick={() => {props.onNavigationSelection('editKegs')}}>Edit Keg</h1>
        </div>
      }
      {props.view === 'patron' && 
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