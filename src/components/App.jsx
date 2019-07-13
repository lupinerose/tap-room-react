import React from 'react'
import { Switch, Route } from 'react-router-dom'
import KegControl from './KegControl'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={KegControl} />
      </Switch>
    </div>
  )
}

export default App
