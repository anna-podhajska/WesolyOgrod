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
        <span>
          <p>
            <img className="logo-footer" src="logo.svg"></img>
          </p>
          <p>
            Wesoły Ogród
          </p>
        </span>
        {
          this.state.contactFormVisible ?
          <ContactForm toggleContactForm={this.toggleContactForm} /> :
            <a onClick={this.toggleContactForm}>
              Napisz do nas
            </a>
          }
        </div>
        </div>
      )
    }
  }



  export default Footer
