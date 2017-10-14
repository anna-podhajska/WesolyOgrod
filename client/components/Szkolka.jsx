import React from 'react'
import jump from 'jump.js'

class Szkolka extends React.Component {
  render(){
    return (
      <div className="Szkolka-container">

        <div className="tile is-ancestor has-text-centered p-margin-top" onClick={()=>jump(".app-body")}>
          <article className="tile is-child box">
            <span className="icon homeicon">
              <i className="fa fa-home is-large"></i>
            </span>
            <p className="title Centrum-title"></p>
          </article>
        </div>

        <div className="tile is-ancestor has-text-centered p-margin-top Szkolka-jump">
          <article className="tile is-child box">
            <p className="title Centrum-title">SZKÓŁKA</p>
          </article>
        </div>


        <div className="tile is-ancestor">
            <div className="tile is-parent">

                <article className="tile is-child box has-text-justified">
                    <p className="title is-size-5">O nas</p>
                    <p className="content">Nasza Szkółka powstała w roku 1986 w Olszowej w województwie wielkopolskim.
                    Przez kolejne lata działalności rozrastała się dzięki inwestycjom w sprzęt, wprowadzeniu nowych roślin oraz poszerzeniu terenu uprawny. <strong>Mamy 30 lat doświadczenia w hodowli roślin</strong>.</p>

                    <p className="content">Oferujemy <strong>fachową pomoc</strong> w dobraniu roślin w zależnoci od rodzaju gleby, nasłonecznienia oraz sposobu użytkowania terenu zielonego.</p>

                    <p className="content">Nasza oferta jest skierowana zarówno do klientów indywidualnych jak i punktów sprzedaży roślin.</p>
                </article>
                <div className="tile is-child box">
                      <div className="">
                          <figure className="image p-padding-bottom">
                            <img src="images/szkolka/nursery-form.jpg" />
                          </figure>
                            <p className="content">
                                <span className="subtitle">Rośliny formowane</span><br/>
                                <span>Produkujemy rośliny formowane różnych rozmiarów. Nadają się one zarówno do hodowli w gruncie jak i donicach. Formowane są thuje, cyprysy, jałowce oraz rośliny liściaste.
                                </span>
                            </p>
                      </div>
                </div>
                <div className="tile is-child box">
                      <div className="">
                          <figure className="image p-padding-bottom">
                            <img src="images/szkolka/nursery-swierki.jpeg" />
                          </figure>
                          <p className="">
                            <span className="subtitle">Świerki i sosny</span><br/>
                            Posiadamy hodowlę świerków srebrnych, jodeł oraz sosen. Oferujemy sprzedaż hurtową oraz detaliczną.
                            Prowadzimy sprzedaż choinek ciętych i doniczkowych w
                            <span className="green"><strong> okresie świątecznym</strong></span>.

                          </p>
                      </div>
                </div>
            </div>
        </div>

        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <article className="tile is-child box has-text-justified">
                  {/* <p className="subtitle"><strong>Zakres działalności</strong></p> */}
                  <p className="">Oferujemy szeroki wybór odmian <strong>roślin żywopłotowych</strong> i szpalerowych takich jak żywotników (Thuj), cyprysów, jałowców, ale też roślin liściastych.
                  </p>
                  <p className="p-padding-top">Posiadamy w sprzedaży <strong>krzewy kwitnące</strong> takie jak azalie, rhododendrony, kamelie, forsycje, rośliny skalne, czy też trawy</p>
                  <p className="p-padding-top">Nowością są <strong>bambusy ogrodowe</strong>, które nadają się do hodowli w naszych warunkach klimatycznych.</p>
                </article>
            </div>
          </div>


        <div className="tile is-ancestor">
            <div className="tile is-parent">
                  <div className="tile is-child box">
                      <p className="subtitle"><strong>Byliny, skalniaki, różaneczniki</strong></p>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image is-4by3">
                      <img src="images/szkolka/nursery-peonias.jpg" />
                    </figure>
                  </div>
                  <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3 ">
                      <img src="images/szkolka/sukulenty.jpeg" />
                    </figure>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image is-4by3">
                      <img src="images/szkolka/nursery-skalniaki-doniczki.jpeg" />
                    </figure>
                  </div>
                  <div className="tile is-child box is-hidden-mobile">
                    <figure className="image is-4by3 ">
                      <img src="images/szkolka/kosodrzewina.jpg" />
                    </figure>
                  </div>
            </div>
        </div>

      </div>
    )
  }
}

export default Szkolka
