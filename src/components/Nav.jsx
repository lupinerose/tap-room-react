import React from 'react'
import './StyleSheet.css'

function Nav() {
  return(
    <div className="stack">
        <h1 className="center red-text link">New Order</h1><br/>
        <h1 className="center link">New Keg</h1><br/>
        <h1 className="center link">Search Kegs</h1><br/>
        <h1 className="center link">Edit Keg</h1>
    </div>
  )
}

export default Nav