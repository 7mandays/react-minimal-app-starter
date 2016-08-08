import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk  from 'redux-thunk'
import reducer from './reducers/reducers'
import App from './components/App'

const initialState = {
    filter: 3,
    messages: []
}

let store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
)
