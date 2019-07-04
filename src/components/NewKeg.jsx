import React from 'react'
import EmployeeNav from './EmployeeNav'

function NewKeg() {
  return(
    <div>
      <div className="navArea">
        <EmployeeNav/>
      </div>
      <div className="pageTitle">
        <h1>Add New Keg</h1>
      </div>
      <div className="kegListArea">
        <div>
          <label>Name</label>
          <input type="text"/>
          <label>Type</label>
          <input type="text"/>
          <label>Alcohol Content</label>
          <input type="text"/>
          <label>Brewery</label>
          <input type="text"/>
        </div>
        <div>

        </div>
        <input type="text"/>
      </div>
    </div>
  )
}

name: 'Thunderhead',
pricePint: '5',
price8oz: '3',
brand: 'Pyramid Brewing Co.',
type: 'IPA',
remainingPints: '124',
seasonal: 'no',
locality: 'the Pacific NorthWest',
city: 'Seattle',
state: ', Washington',
country: 'USA'

export default NewKeg