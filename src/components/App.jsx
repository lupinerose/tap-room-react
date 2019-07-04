import React from 'react'
import logo from '../assets/taproomlogo.jpg'
import './App.css'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import Employee from './Employee'
import Patron from './Patron'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/employee' component={Employee} />
        <Route path='/patron' component={Patron} />
      </Switch>
      <header className="App-header">
        <Link to="/employee">Employee</Link>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/patron">Patron</Link>
      </header>
    </div>
  )
}

export default App
