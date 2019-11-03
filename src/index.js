import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux' 
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import cartReducer from './components/reducers/cart'

import * as serviceWorker from './serviceWorker'

const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)


ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>, 
  document.getElementById('root')
)

serviceWorker.unregister()
