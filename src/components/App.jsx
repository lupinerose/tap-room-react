import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Employee from './Employee'
import Patron from './Patron'
import Welcome from './Welcome'
import EditKeg from './EditKeg'
import NewKeg from './NewKeg'
import NewOrder from './NewOrder'
import SearchKegs from './SearchKegs'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/employee' component={Employee} />
        <Route exact path='/patron' component={Patron} />
        <Route exact path='/employee/new-order' component={NewOrder} />
        <Route exact path='/employee/new-keg' component={NewKeg} />
        <Route exact path='/employee/edit-keg' component={EditKeg} />
        <Route exact path='/employee/search' component={SearchKegs} />
      </Switch>
    </div>
  )
}

export default App
