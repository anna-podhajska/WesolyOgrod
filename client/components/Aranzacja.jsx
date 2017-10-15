import React from 'react'
import jump from 'jump.js'

class Aranzacja extends React.Component {
  render(){
    return (
      <div className="Aranzacja-container">


        <div className="tile is-ancestor has-text-centered p-margin-top" onClick={()=>jump(".app-body")}>
          <article className="tile is-child box">
            <span className="icon homeicon">
              <i className="fa fa-home is-large"></i>
            </span>
            <p className="title Centrum-title"></p>
          </article>
        </div>

        <div className="tile is-ancestor has-text-centered p-margin-top Aranzacja-jump">
          <article className="tile is-child box">
            <p className="title Centrum-title">ARANŻACJA OGRODÓW</p>
          </article>
        </div>


        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <div className="tile is-child box">
                  <article className="content">
                    <p className="title is-size-5">
                      Aranzacja ogrodów, tarasów i terenów zielonych.
                    </p>
                    <p>Kompleksowo aranżujemy <strong>ogrody</strong>, ogródki, skwery, obsadzamy donice tarasowe. Pomagamy zaaranżować tereny komercyjne takie jak ogródki restauracyjne, wejścia do firm, tereny zakładów przemysłowych. Zakładamy i pielęgnujemy <strong>trawniki</strong>. </p> <p>Zakładamy <strong>automatyczne nawadnianie</strong>.</p>
                    <p>Aranżujemy <strong>architekturę ogrodową </strong>taką jak pergole, oczka wodne, skalniaki, obrysówki trawnika i skwerów, kamień ogrodowy.</p>
                  </article>
                </div>
                <div className="tile is-child box">
                    <figure className="image">
                      <img src="images/aranzacja/lawn.jpeg" />
                    </figure>
                </div>
            </div>
        </div>


        <div className="tile is-ancestor">

            <div className="tile is-parent is-vertical">
                  <div className="tile is-child has-text-centered content box">
                    <p className="title is-size-5">Nasze realizacje</p>
                    <p>Przez lata stworzyliśmy wiele pięknych ogrodów, poniżej przedstawiamy wybrane zdjęcia tylko jednego z ostatnich.</p>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image ">
                      <img src="images/aranzacja/ania_garden_front.jpg" alt="garden toolbox photo" />
                    </figure>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image  ">
                      <img src="images/aranzacja/ania_garden_narrow.jpg" />
                    </figure>
                  </div>
            </div>
            <div className="tile is-parent is-6">
                  <div className="tile is-child box">
                    <figure className="image p-padding-bottom ">
                      <img src="images/aranzacja/ania_garden_toolbox.jpg" alt="garden toolbox photo" />
                    </figure>
                    <figure className="image is-4by3 p-padding-top">
                      <img src="images/aranzacja/ania_garden_back_small.jpg" />
                    </figure>
                  </div>
            </div>
        </div>


{/* belka mini zdjec na dole  */}

        <div className="tile is-ancestor">
            <div className="tile is-parent">
                  <div className="tile is-child box">
                    <figure className="image is-4by3 ">
                      <img src="images/aranzacja/trawy-kwiaty.jpeg" />
                    </figure>
                  </div>
                  <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3 ">
                      <img src="images/aranzacja/ania_garden_lawn.jpg" />
                    </figure>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image is-4by3 is-hidden-mobile">
                      <img src="images/aranzacja/garden-molo.jpeg" />
                    </figure>
                  </div>
                  <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3 ">
                      <img src="images/aranzacja/garden-lawender.jpeg" />
                    </figure>
                  </div>
            </div>
        </div>
        <div className="tile is-ancestor">
            <div className="tile is-parent">
                  <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3">
                      <img src="images/aranzacja/trees-color-small.jpg" />
                    </figure>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image is-4by3 ">
                      <img src="images/szkolka/azalie_zolte.jpg" />
                    </figure>
                  </div>
                  <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3 ">
                      <img src="images/aranzacja/lawender.jpg" />
                    </figure>
                  </div>
                  <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3">
                      <img src="images/aranzacja/camelias.jpeg" />
                    </figure>
                  </div>
            </div>
        </div>







      </div>
    )
  }
}

export default Aranzacja
