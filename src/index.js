import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

render(
  <Provider store={store}>
    <Router>
      <Route path="/:selectedDate?" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
