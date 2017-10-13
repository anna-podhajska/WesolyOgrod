import React from 'react'
import jump from 'jump.js'

class Thumbnails extends React.Component {

  render() {

    return (

        <div className="">

          <div className="columns is-desktop Thumbnails-card">

            <div className="column Thumbnails-card" onClick={()=>jump(".Centrum-jump")}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="background/gc-pink.jpg" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h3 className="Thum-title">Centrum Ogrodnicze</h3>
                    <p>Architektura ogrodowa, kamień, sprzęt ogrodowy i inne. <span className="green">Wejdź</span>  </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="column Thumbnails-card" onClick={()=>jump(".Szkolka-jump")}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="background/nursery-smallPlants.jpg" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h3 className="Thum-title">Szkółka</h3>
                    <p>Szkółka drzew i krzewów ozdobnych, rośliny formowane. <span className="green">Wejdź</span>  </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="column Thumbnails-card" onClick={()=>jump(".Aranzacja-jump")}>
              <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="background/landscape-planning.jpg" alt="Placeholder image" />
                      {/* <img src="background/nursery-hand.jpg" alt="Placeholder image" /> */}
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h3 className="Thum-title">Aranżacja ogrodów</h3>
                      <p>Aranżacja terenów zielonych, nawadnianie, trawniki. <span className="green">Wejdź</span> </p>
                    </div>
                  </div>
                </div>
            </div>

          </div>

      </div>




    )
  }
}

export default Thumbnails
