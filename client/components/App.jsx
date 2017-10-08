import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
import Thumbnails from './Thumbnails'
import Contact from './Contact'
import Footer from './Footer'

// import Register from './Register'
// import Login from './Login'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='app-container'>
          <Route path="/" component={Header} />
          <div className="app-body">
            <Route path="/" component={Thumbnails} />
            <Route path="/" component={Contact} />
            <Route path="/" component={Footer} />
          </div>
        </div>
      </Router>
    )
  }
}


export default connect()(App)
