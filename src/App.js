import React from 'react'
import Login from './Components/Login.js'
import Navbar from './Components/Navbar.js'
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Home.js'

const App = () => {
  return (
    <div>
                <Switch>
                  <Route exact path="/">
                        <Navbar />
                        <Login />
                    </Route>
                    <Route exact path="/Home">
                        <Home />
                    </Route>
                </Switch>
    </div>
  )
}

export default App
