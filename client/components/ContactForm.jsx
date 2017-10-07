import React from 'react'
import jump from 'jump.js'

class ContactForm extends React.Component {
componentDidMount = () => {
  jump('.ContactForm')
}

  render = () => {
    let {toggleContactForm} = this.props
    return (
      <div className="ContactForm columns">
        <div className="column">
          <a onClick={toggleContactForm}>
            Zamknij
          </a>
          <form method="POST" action="https://formspree.io/podhajskaa@gmail.com">
            <div className="field">
              <div className="control">
                <input className="input" type="email" name="email" placeholder="Twój email" />
                </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea className="textarea" name="message" placeholder="Wiadomość"></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">Wyślij</button>
              </div>
            </div>
          </form>
          </div>
        </div>
    )
  }
}


export default ContactForm
