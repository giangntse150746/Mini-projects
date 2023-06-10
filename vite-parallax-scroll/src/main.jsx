import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './assets/css'
import { Homepage } from './pages/homepage'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Router>
  //   <Switch>
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   </Switch>
  // </Router>,
  <Homepage />,
)
