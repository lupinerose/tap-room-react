import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'

function KegList(props){
  return(
    <div>
      {props.kegList.map((keg, index) => 
        <Keg name={keg.name}
          pricePint={keg.pricePint}
          price8oz={keg.price8oz}
          brand={keg.brand}
          type={keg.type}
          alcohol={keg.alcohol}
          remainingPints={keg.remainingPints}
          seasonal={keg.seasonal}
          locality={keg.locality}
          city={keg.city}
          state={keg.state}
          country={keg.country}
          key={index}/>
      )}
    </div>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList