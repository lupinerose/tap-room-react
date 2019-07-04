import React from 'react'
import Keg from './Keg'

var masterKegList = [
  {
    name: 'Thunderhead',
    pricePint: '5',
    price8oz: '3',
    brand: 'Pyramid Brewing Co.',
    type: 'IPA',
    alcohol: '6.7',
    remainingPints: '124',
    seasonal: 'no',
    locality: 'the Pacific NorthWest',
    city: 'Seattle',
    state: ', Washington',
    country: 'USA'
  },
  {
    name: 'Proletariat Red',
    pricePint: '5',
    price8oz: '3',
    brand: 'Lompoc Brewing Co.',
    type: 'Red Ale',
    alcohol: '6',
    remainingPints: '64',
    seasonal: 'no',
    locality: 'Town',
    city: 'Portland',
    state: ', Oregon',
    country: 'USA'
  },
  {
    name: 'Sleighr Winter Ale',
    pricePint: '6',
    price8oz: '3',
    brand: 'Ninkasi Brewing Co.',
    type: 'Dark Double Alt Ale',
    alcohol: '7.8',
    remainingPints: '20',
    seasonal: 'yes',
    locality: 'State',
    city: 'Eugene',
    state: ', Oregon',
    country: 'USA'
  },
  {
    name: 'Corona Extra',
    pricePint: '5',
    price8oz: '3',
    brand: 'Cervecería Modelo',
    type: 'Pale Lager',
    alcohol: '4.5',
    remainingPints: '9',
    seasonal: 'no',
    locality: 'Earth',
    city: '',
    state: '',
    country: 'Mexico'
  },
  {
    name: 'Saigon Beer',
    pricePint: '7',
    price8oz: '3',
    brand: 'Sabeco',
    type: 'Lager',
    alcohol: '5',
    remainingPints: '124',
    seasonal: 'no',
    locality: 'Earth',
    city: 'Ho Chi Minh City',
    state: '',
    country: 'Vietnam'
  },
  {
    name: 'Pabst Blue Ribbon',
    pricePint: '3',
    price8oz: '1',
    brand: 'Pabst Brewing Co.',
    type: 'Lager',
    alcohol: '4',
    remainingPints: '53',
    seasonal: 'no',
    locality: 'the Midwest',
    city: 'Milwaukee',
    state: ', Wisconsin',
    country: 'USA'
  }
]

function KegList(){
  return(
    <div>
      {masterKegList.map((keg, index) => 
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

export default KegList