import React, { Fragment } from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { NavBar } from './components'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
import Login from './pages/Login'

import './style.css'

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="contentMain">
        <Switch>
          <Route
            path="/"
            component={Products}
            exact
          />
          <Route
            path="/checkout"
            component={Checkout}
          />
          <Route
            path="/payment"
            component={Payment}
          />
          <Route
            path="/login"
            component={Login}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Fragment>
  )
}

export default App
