import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux' 
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import cartReducer from './components/reducers/cart'
import loginReducer from './components/reducers/login'

const rootReducers = combineReducers({
  login: loginReducer,
  products: cartReducer,
})

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)


ReactDOM.render(
  <Provider
    store={store}
  >
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>, 
  document.getElementById('root')
)
