import React, { Fragment } from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import { NavBar } from './components'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
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
          <Route
            path="/checkout"
            component={Checkout}
          />
        </Switch>
      </div>
    </Fragment>
  )
}

export default App
