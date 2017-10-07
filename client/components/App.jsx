import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
// import Register from './Register'
// import Login from './Login'
import Footer from './Footer'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='app-container'>
          <Route path="/" component={Header} />
          <div className="app-body">
            <Route path="/" component={Footer} />
          </div>
        </div>
      </Router>
    )
  }
}


export default connect()(App)
