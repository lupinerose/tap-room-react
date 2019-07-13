import React from 'react'
import './StyleSheet.css'
import Welcome from './Welcome'
import Nav from './Nav'
import KegList from './KegList'
import NewKeg from './NewKeg'

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
    alcohol: 4.6,
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
      isEmployee: true,
      isPatron: true,
      view: '',
      kegList: masterKegList,
      sortType: 'all',
      employeeOperation: false
    }
    this.handleEmployeeOrPatronClick = this.handleEmployeeOrPatronClick.bind(this)
    this.handleEmployeeNavigationSelection = this.handleEmployeeNavigationSelection.bind(this)
    this.handleSortSelection = this.handleSortSelection.bind(this)
    this.compareForAlcohol = this.compareForAlcohol.bind(this)
    this.compareForPrice = this.compareForPrice.bind(this)
    this.handleNewKeg = this.handleNewKeg.bind(this)
  }

  handleEmployeeOrPatronClick(type) {
    if(type === "Employee Keg List") {
      this.setState ({
        isWelcome: false,
        isPatron: false,
        isEmployee: true,
        view: 'Employee Keg List'
      })
    } else {
      this.setState({
        isWelcome: false,
        isPatron: true,
        isEmployee: false,
        view: 'The Tap Room'
      })
    }
  }

  handleEmployeeNavigationSelection(type) {
    console.log(type)
    if(type === "Add New Keg") {
      this.setState ({
        view: 'Add New Keg',
        isEmployee: false,
        employeeOperation: true
      })
    } else {
    }
  }

  compareForAlcohol(a, b){
    const typeA = a.alcohol
    const typeB = b.alcohol
  
    let comparison = 0;
    if (typeA > typeB) {
      comparison = 1;
    } else if (typeA < typeB) {
      comparison = -1;
    }
    return comparison;
  }

  compareForPrice(a, b){
    const typeA = a.pricePint
    const typeB = b.pricePint
  
    let comparison = 0;
    if (typeA > typeB) {
      comparison = 1;
    } else if (typeA < typeB) {
      comparison = -1;
    }
    return comparison;
  }

  handleSortSelection(type) {
    let newKegList = masterKegList
    console.log(newKegList)
    if (type === 'all') {
      newKegList = masterKegList
      return (
      this.setState({
        kegList: newKegList,
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
    } else if (type === 'pricePint') {
      newKegList.sort(this.compareForPrice)
      return (
        this.setState({
          kegList: newKegList,
          sortType: type
        }))
    } else if (type === 'alcohol') {
      newKegList.sort(this.compareForAlcohol)
      return (
        this.setState({
          kegList: newKegList,
          sortType: type
        }))
    }
  }

  handleNewKeg(keg) {
    let newKegList = this.state.kegList
    newKegList.push(keg)
    this.setState({
      kegList: newKegList
    })
  }

  render() {
    console.log(this.state.sortType)
    return(
      <div>
        {this.state.isWelcome && <Welcome onEmployeeOrPatronClick={this.handleEmployeeOrPatronClick}/>}
        {(this.state.isPatron || this.state.isEmployee) &&
          <div className="layout">
            <div className="navArea">
            <Nav view={this.state.view} onNavigationSelection={this.handleEmployeeNavigationSelection} onSortSelection={this.handleSortSelection}/>}
            </div>
            <div className="pageTitle">
              <h1>{this.state.view}</h1>
            </div>
            <div className="kegListArea">
              <KegList view={this.state.view} sortType={this.state.sortType} kegList={this.state.kegList}/>}
            </div>
          </div> 
        }
        {this.state.employeeOperation ? <NewKeg view={this.state.view} onNewKeg={this.handleNewKeg}/> : null}
      </div>
    )
  }

}

export default KegControl;