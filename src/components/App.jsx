import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Employee from './Employee'
// import Patron from './Patron'
import KegControl from './KegControl'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={KegControl} />
        {/* <Route exact path='/employee' component={Employee} />
        <Route exact path='/patron' component={Patron} /> */}
      </Switch>
    </div>
  )
}

export default App
