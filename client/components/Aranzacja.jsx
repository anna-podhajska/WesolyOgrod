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
            <p className="title Centrum-title">ARANŻACJA</p>
          </article>
        </div>


        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <div className="tile is-child box">
                  <article className="content">
                    <p className="title is-size-5">
                      Aranzacja ogrodów, tarasów i terenów zielonych.
                    </p>
                    <p>Aranżujemy ogrody, ogródki, zakładamy trawniki, obsadzamy donice tarasowe. Pomagamy uporządkować istniejące ogrody, obsadzamy kwiatami i przycinamy żywopłoty.</p>
                    <p>Zakładamy i pielęgnujemy trawniki. Pomagamy pozbyć się chwastów oraz uczymy jak utrzymać piękny trawnik. Pomagamy zaaranżować tereny komercyjne takie jak ogródki restauracyjne, wejścia do firm, tereny zakładów przemysłowych.</p>
                    <p>Przez lata stworzyliśmy wiele pięknych ogrodów, poniżej przedstawiamy wybrane zdjęcia tylko jednego z ostatnich.</p>
                  </article>
                </div>
                <div className="tile is-child box">
                    <figure className="image">
                      <img src="background/aranzacja/lawn.jpeg" />
                    </figure>
                </div>
            </div>
        </div>


        <div className="tile is-ancestor">

            <div className="tile is-parent is-vertical">
                  <div className="tile is-child has-text-centered content box">
                    <p className="title is-size-5">Nasze aranżacje</p>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image ">
                      <img src="background/aranzacja/ania_garden_toolbox.jpg" alt="garden toolbox photo" />
                    </figure>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image  ">
                      <img src="background/aranzacja/ania_garden_narrow.jpg" />
                    </figure>
                  </div>
            </div>
            <div className="tile is-parent is-6 is-hidden-mobile">
                  <div className="tile is-child box">
                    <figure className="image ">
                      <img src="background/aranzacja/ania_garden_lawn.jpg" alt="garden toolbox photo" />
                    </figure>
                  </div>
            </div>
        </div>


{/* belka mini zdjec na dole  */}

        <div className="tile is-ancestor">
            <div className="tile is-parent">
                  <div className="tile is-child box">
                    <figure className="image is-4by3 ">
                      <img src="background/aranzacja/ania_garden_back_small.jpg" />
                    </figure>
                  </div>
                  <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3 ">
                      <img src="background/aranzacja/ania_garden_front.jpg" />
                    </figure>
                  </div>
                  {/* <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3 ">
                      <img src="background/szkolka/sukulenty.jpeg" />
                    </figure>
                  </div> */}
                  <div className="tile is-child box">
                    <figure className="image is-4by3">
                      <img src="background/szkolka/azalie_zolte.jpg" />
                    </figure>
                  </div>
                  <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3">
                      <img src="background/aranzacja/camelias.jpeg" />
                    </figure>
                  </div>
            </div>
        </div>
        <div className="tile is-ancestor">
            <div className="tile is-parent">
                  <div className="tile is-child box">
                    <figure className="image is-4by3">
                      <img src="background/aranzacja/trees-color-small.jpg" />
                    </figure>
                  </div>
                  <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3 ">
                      <img src="background/aranzacja/garden-molo.jpeg" />
                    </figure>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image is-4by3 ">
                      <img src="background/aranzacja/skalniaki-kwiaty.jpeg" />
                    </figure>
                  </div>
                  <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3">
                      <img src="background/aranzacja/garden-lawender.jpeg" />
                    </figure>
                  </div>
            </div>
        </div>







      </div>
    )
  }
}

export default Aranzacja
