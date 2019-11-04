import React, { Fragment } from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import { NavBar } from './components'
import Products from './pages/Products'
import './style.css'
const App = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="contentMain">
        <Switch>
          <Route
            path="/products"
            component={Products}
          />
        </Switch>
      </div>
    </Fragment>
  )
}

export default App
