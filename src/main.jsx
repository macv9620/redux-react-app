import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import './index.css'
import { printActionMiddleware } from './middleware/printAction.js'
import { rootReducer } from './redux/reducers/rootReducer.js'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeAlt(applyMiddleware(thunk, printActionMiddleware))

const store = createStore(rootReducer, composedEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
