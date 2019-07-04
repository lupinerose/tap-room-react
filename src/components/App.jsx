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
        <Route path='/employee' component={Employee} />
        <Route path='/patron' component={Patron} />
        <Route path='/employee/new-order' component={NewOrder} />
        <Route path='/employee/new-keg' component={NewKeg} />
        <Route path='/employee/edit-keg' component={EditKeg} />
        <Route path='/employee/search' component={SearchKegs} />
      </Switch>
    </div>
  )
}

export default App
