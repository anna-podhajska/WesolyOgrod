import React from 'react'
// import jump from 'jump.js'

class Thumbnails extends React.Component {

  render() {

    return (
      <div className="Thumbnails-container">


          <div className="columns">

              <div className="card column">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="background/gc-pink.jpg" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">

                  <div className="content">
                    <h3>Centrum Ogrodnicze</h3>
                    <p>Znajdziesz tu między innymi środki ochrony roślin oraz architekturę ogrodową. Zobacz więcej!   </p>
                  </div>
                </div>
              </div>


              <div className="card column">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="background/bridge.jpg" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h3>Aranżacja ogrodów</h3>
                    <p>Aranżacja terenów zielonych, zakładanie trawników i nawadniania. Zobacz więcej!   </p>
                  </div>
                </div>
              </div>

              <div className="card column">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="background/bridge.jpg" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h3>Szkółka</h3>
                    <p>Szkółka drzew i krzewów ozddobnych. Zobacz więcej!   </p>
                  </div>
                </div>
              </div>


              <div className="card column">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="background/peonias.jpeg" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h3>Kwiaciarnia</h3>
                    <p>Kwiaty i rośliny domowe. Zobacz więcej!   </p>
                  </div>
                </div>
              </div>

          </div>  {/*level class end*/}


      </div>
    )
  }
}

export default Thumbnails
