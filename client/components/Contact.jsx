import React from 'react'
import MapSingle from './MapSingle'
// import jump from 'jump.js'

class Contact extends React.Component {

  render() {

    return (
      <div className="Contact-container has-text-centered is-fullheight">
          <h1 className="title is-fullwidth">Kontakt</h1>
          <div className="columns is-desktop">

            <div className="Contact-contact column is-half-desktop has-text-centered">

                  <div className="card-content">
                        <p className="title">Wesoły Ogród</p>
                        <div className="has-text-centered">
                          ul. Granitowa 24 <br />
                          63-600 Olszowa <br />gm. Kępno
                        </div>
                  </div>

                      <div className="content">

                          <p className="subtitle">
                            Aranżacja ogrodów <br/>

                            <a href="tel:603-687-832">
                              <span className="icon is-medium">
                                <i className="fa fa-phone"></i>
                              </span>
                              603-687-832
                            </a>
                          </p>


                          <p className="subtitle">
                            Centrum <br/>

                            <a href="tel:667-393-232">
                              <span className="icon is-medium">
                                <i className="fa fa-phone"></i>
                              </span>
                              667-393-232
                            </a>
                          </p>
                      </div>



                  <div className="card-content">
                      <p className="title"> Godziny otwarcia </p>
                      <p>
                        poniedziałek - niedziela <br />
                        8:00-17:00 od listopada do maja <br />
                        8:00-20:00 od maja do listopada <br />
                      </p>
                  </div>


              </div>


              <div className="column is-half-desktop Contact-map ">
                  <MapSingle />


              </div>
          </div>

      </div>
    )
  }
}

export default Contact
