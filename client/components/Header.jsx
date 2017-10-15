import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import jump from 'jump.js'

import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import HeaderBody from './HeaderBody'

const Header = ({isAuthenticated}) => (

  <section className="hero is-dark is-fullheight Header-container">
    {/* LOGIN - UNCOMMENT WHEN READY TO USE */}
    {/* <div className="hero-head">
      <div className="nav Nav">
        <div className="container Header-navbar">
          <div className="nav-left">
            <div className="nav-item">
              <Link exact to="/"><img className="logo" src="logo.svg"></img></Link>
            </div>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="nav-right nav-menu">
              {!isAuthenticated && (
                <div>
                <div className="nav-item NavItem">
                  <Route path='/' render={() => (
                    <Link to="/login">
                      Login
                    </Link>
                  )} />
                </div>
                <div className="nav-item NavItem">
                  <Route path='/' render={() => (
                    <Link to="/register">
                      Register
                    </Link>
                  )} />
                </div>
                </div>
                        )}
                {isAuthenticated &&
                  <div className="nav-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <Link to="/user" className="button is-primary is-inverted">Me</Link>
                      </p>
                      <p className="control">
                        <Link to="/" className="button is-primary is-inverted">Home</Link>
                      </p>
                      <p className="control">
                        <Logout />
                      </p>
                    </div>
                  </div>
                }
            </div>
        </div>
      </div>
    </div> */}


    <div className="hero-head p-padding-top">
        <div className="Header-navbar container">
          <div className="columns nav">
            <div className="column" onClick={()=>jump(".Contact-container")}>
                <span className="icon">
                  <i className="fa fa-map-marker is-medium"></i>
                </span>
                <span className="">kontakt</span>
            </div>
            <div className="column is-2 is-offset-8" onClick={()=>jump(".onasjump")}>
                <p className="">o nas</p>
            </div>
          </div>
        </div>
    </div>


    <div className="hero-body">
      <div className="container has-text-centered">
        <Route exact path="/" render={() => (
            <HeaderBody />
        )} />
      <Route exact path="/login" render={() => (
            <Login />
        )} />
      <Route exact path="/register" render={() => (
            <Register />
        )} />
      </div>
    </div>

</section>
)

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Header)
