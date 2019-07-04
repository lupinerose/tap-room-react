import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Employee from './Employee'
import Patron from './Patron'
import Welcome from './Welcome'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/employee' component={Employee} />
        <Route path='/patron' component={Patron} />
      </Switch>
      <Welcome/>
    </div>
  )
}

export default App
