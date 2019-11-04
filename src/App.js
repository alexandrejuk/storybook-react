import React, { Fragment } from 'react'
import { NavBar } from './components'
import Products from './pages/Products'
import './style.css'
const App = () => {
  return (
   <Fragment>
    <NavBar />
    <div className="contentMain">
      <Products />
    </div>
   </Fragment>
  )
}

export default App
