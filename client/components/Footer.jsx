import React from 'react'
import jump from 'jump.js'

import ContactForm from './ContactForm'


class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contactFormVisible: false
    }
    this.toggleContactForm = this.toggleContactForm.bind(this)
  }

  toggleContactForm() {
    const newContact = !this.state.contactFormVisible
    this.setState({
      contactFormVisible: newContact
    })
  }
  render() {
    return (
      <div className="footer has-text-centered columns">
          <div className="column is-one-third is-offset-one-third">

              <ul className="menu-list">
                  <li>
                      <a className="" onClick={()=>jump(".app-body")}>
                        <p>
                          <img className="logo-footer" src="logo.svg"></img>
                        </p>
                      </a>
                  </li>
                  <li>
                      <p>Wesoły Ogród</p>
                  </li>
                  <li className="Footer-designer-contact">
                      <a href="mailto:ani_w@o2.pl">
                        <p className="menu-label">
                          Designed & made by Anna Podhajska
                        </p>
                      </a>
                  </li>
              </ul>

              {/* uncomment if u wanna activate contact form, just remember to make it mobile-ready */}
              {/* {
                this.state.contactFormVisible ?
                <ContactForm toggleContactForm={this.toggleContactForm} /> :
                  <a onClick={this.toggleContactForm}>
                    Napisz do nas
                  </a>
                } */}

          </div>
      </div>
      )
    }
  }



  export default Footer
