import React from 'react'
import './StyleSheet.css'
import PropTypes from 'prop-types'

function Nav(props) {
  return(
    <div className="stack">
      {props.view === 'employee' &&
        <div>
          <h1 className="center red-text link">New Order</h1><br/>
          <h1 className="center link">New Keg</h1><br/>
          <h1 className="center link">Search Kegs</h1><br/>
          <h1 className="center link">Edit Keg</h1>
        </div>
      }
      {props.view === 'patron' && 
        <div>
          <h2>Sort by... </h2>
          <h1 className="center link">ABV</h1><br/>
          <h1 className="center link">Price</h1><br/>
          <h1 className="center link">Seasonal</h1>
        </div>
      }
    </div>
  )
}

Nav.propTypes = {
  view: PropTypes.string.isRequired,
  onNavigationSelection: PropTypes.func.isRequired
}

export default Nav