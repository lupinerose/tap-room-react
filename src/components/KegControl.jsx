import React from 'react'
import './StyleSheet.css'
import Welcome from './Welcome'
import Nav from './Nav'
import KegList from './KegList'

var masterKegList = [
  {
    name: 'Thunderhead',
    pricePint: 5,
    price8oz: 3,
    brand: 'Pyramid Brewing Co.',
    type: 'IPA',
    alcohol: 6.7,
    remainingPints: 124,
    seasonal: 'no',
    locality: 'the Pacific NorthWest',
    city: 'Seattle',
    state: ', Washington',
    country: 'USA'
  },
  {
    name: 'Proletariat Red',
    pricePint: 5,
    price8oz: 3,
    brand: 'Lompoc Brewing Co.',
    type: 'Red Ale',
    alcohol: 6,
    remainingPints: 64,
    seasonal: 'no',
    locality: 'Town',
    city: 'Portland',
    state: ', Oregon',
    country: 'USA'
  },
  {
    name: 'Sleighr Winter Ale',
    pricePint: 6,
    price8oz: 3,
    brand: 'Ninkasi Brewing Co.',
    type: 'Dark Double Alt Ale',
    alcohol: 7.8,
    remainingPints: 20,
    seasonal: 'yes',
    locality: 'State',
    city: 'Eugene',
    state: ', Oregon',
    country: 'USA'
  },
  {
    name: 'Corona Extra',
    pricePint: 5,
    price8oz: 3,
    brand: 'Cervecería Modelo',
    type: 'Pale Lager',
    alcohol: 4.5,
    remainingPints: 9,
    seasonal: 'no',
    locality: 'Earth',
    city: '',
    state: '',
    country: 'Mexico'
  },
  {
    name: 'Saigon Beer',
    pricePint: 7,
    price8oz: 3,
    brand: 'Sabeco',
    type: 'Lager',
    alcohol: 5,
    remainingPints: 124,
    seasonal: 'no',
    locality: 'Earth',
    city: 'Ho Chi Minh City',
    state: '',
    country: 'Vietnam'
  },
  {
    name: 'Pabst Blue Ribbon',
    pricePint: 3,
    price8oz: 1.50,
    brand: 'Pabst Brewing Co.',
    type: 'Lager',
    alcohol: 4,
    remainingPints: 53,
    seasonal: 'no',
    locality: 'the Midwest',
    city: 'Milwaukee',
    state: ', Wisconsin',
    country: 'USA'
  }
]

class KegControl extends React.Component{
  constructor() {
    super()
    this.state = {
      isWelcome: true,
      view: '',
      kegList: masterKegList,
      sortType: 'all'
    }
    this.handleEmployeeOrPatronClick = this.handleEmployeeOrPatronClick.bind(this)
    this.handleNavigationSelection = this.handleNavigationSelection.bind(this)
    this.handleSortSelection = this.handleSortSelection.bind(this)
    this.compare = this.compare.bind(this)
    // this.sort = this.sort.bind(this)
  }

  handleEmployeeOrPatronClick(type) {
    if(type === "employee") {
      this.setState ({
        isWelcome: false,
        view: 'employee'
      })
    } else {
      this.setState({
        isWelcome: false,
        view: 'patron'
      })
    }
  }

  handleNavigationSelection(type) {

  }

  compare(a, b, sort){
    const typeA = a[sort]
    const typeB = b[sort]
  
    let comparison = 0;
    if (typeA > typeB) {
      comparison = 1;
    } else if (typeA < typeB) {
      comparison = -1;
    }
    return comparison;
  }

  handleSortSelection(type) {
    let newKegList = this.state.kegList.slice()
    if (type === 'all') {
      return (
      this.setState({
        kegList: masterKegList,
        sortType: type
      }))
    } else if (type === 'seasonal') {
      let seasonalList = [];
        newKegList.forEach((keg) => {if(keg.seasonal === 'yes') { seasonalList.push(keg)}})
        return(
        this.setState({
          kegList: seasonalList,
          sortType: type
        }))
    } else if (type === 'pricePint' || type === 'alcohol') {
      let sortedList = newKegList.sort(() => {this.compare(type)})
      return (
        this.setState({
          kegList: sortedList,
          sortType: type
        }))
    }
  }

  render() {
    console.log(this.state.sortType)
    return(
      <div>
        {this.state.isWelcome && <Welcome onEmployeeOrPatronClick={this.handleEmployeeOrPatronClick}/>}
        {!this.state.isWelcome &&
          <div className="layout">
            <div className="navArea">
            <Nav view={this.state.view} onNavigationSelection={this.handleNavigationSelection} onSortSelection={this.handleSortSelection}/>}
            </div>
            <div className="pageTitle">
              <h1>Keg List - {this.state.view}</h1>
            </div>
            <div className="kegListArea">
              <KegList view={this.state.view} sortType={this.state.sortType} kegList={this.state.kegList}/>}
            </div>
          </div> 
        }
      </div>
    )
  }

}

export default KegControl;