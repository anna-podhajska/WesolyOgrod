import React from 'react'
import MapSingle from './MapSingle'
import jump from 'jump.js'

class Contact extends React.Component {

  render() {

    return (
      <div className="Contact-container">

        <div className="tile is-ancestor has-text-centered">
          <article className="tile is-child box is-fullwidth">
            <p className="title Contact-title">Kontakt</p>
          </article>
        </div>

        <div className="container">
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child ">


                    <div className="content has-text-centered">

                        <div className="box">
                          {/* <p className="subtitle">Telefon</p> */}
                            <p className="title">
                              Aranżacja ogrodów <br/>
                              <a href="tel:603-687-832">
                                <span className="icon is-medium">
                                  <i className="fa fa-phone"></i>
                                </span>
                                603-687-832
                              </a>
                            </p>
                            <p className="title">
                              Centrum <br/>
                              <a href="tel:667-393-232">
                                <span className="icon is-medium">
                                  <i className="fa fa-phone"></i>
                                </span>
                                667-393-232
                              </a>
                            </p>
                        </div>
                        <div className="box">
                              {/* <p className="subtitle">Adres</p> */}
                              <p className="subtitle">
                                Wesoły Ogród <br />
                                ul. Granitowa 24 <br />
                                63-600 Olszowa <br />gm. Kępno
                              </p>
                        </div>
                    </div>
                  </article>
                </div>

                <div className="tile is-parent is-8">
                  <article className="tile is-child ">
                    <span className="content">
                      <MapSingle />
                    </span>
                  </article>
                </div>
              </div>
          </div>

          <div className="tile is-ancestor has-text-centered" onClick={()=>jump(".app-body")}>
            <article className="tile is-child box">
              <span className="icon homeicon">
                <i className="fa fa-home is-large"></i>
              </span>
              <p className="title Centrum-title"></p>
            </article>
          </div>

    </div>


    )
  }
}

export default Contact
