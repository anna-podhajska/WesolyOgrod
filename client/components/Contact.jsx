import React from 'react'
import MapSingle from './MapSingle'
// import jump from 'jump.js'

class Contact extends React.Component {

  render() {

    return (
      <div className="Contact-container">

          <div className="level columns card">
            <div className="Contact-contact is-half has-text-centered column">
              <h1 className="title">Wesoły Ogród</h1>

                  <div className="Contact-phones content">
                      <p>Centrum <a href="tel:667-393-232">667-393-232</a></p>
                      <p>Ogrody-aranżacja <a href="tel:603-687-832">603-687-832</a></p>

                  </div>

                  <div className="Contact-hours content">
                      <span className="subtitle"> Godziny otwarcia </span>
                      <p>
                        poniedziałek - niedziela <br />
                        8:00-17:00 od listopada do maja <br />
                        8:00-20:00 od maja do listopada <br />
                      </p>
                  </div>

                  <div className="Contact-address content">
                    <span className="card-content"><strong>ul. Granitowa 24, 63-600 Olszowa, gm. Kępno</strong></span>
                  </div>
              </div>


              <div className="Contact-map has-text-centered content column is-half">
                  <MapSingle />
              </div>
          </div>

      </div>
    )
  }
}

export default Contact
