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
                    <p className="content">Nasza Szkółka została powstała w roku 1986 w Olszowej w województwie wielkopolskim.
                    Przez kolejne lata działalności rozrastała się dzięki inwestycjom w sprzęt, wprowadzeniu nowych roślin oraz poszerzeniu terenu uprawny. <strong>Mamy 30 lat doświadczenia w hodowli roślin</strong>.</p>

                    <p className="content">Oferujemy <strong>fachową pomoc</strong> w dobraniu roślin w zależnoci od rodzaju gleby, nasłonecznienia oraz sposobu użytkowania terenu zielonego.</p>

                    <p className="content">Nasza oferta jest skierowana zarówno do klientów indywidualnych jak i punktów sprzedaży roślin.</p>
                </article>
                <div className="tile is-child box">
                      <div className="">
                          <figure className="image">
                            <img src="background/szkolka/nursery-form.jpg" />
                          </figure>
                            <p className="content">
                                <span className="title is-size-5">Rośliny formowane</span><br/>
                                <span>Produkujemy rośliny formowane różnych rozmiarów. Nadają się one zarówno do hodowli w gruncie jak i donicach. Formowane są thuje, cyprysy, jałowce oraz rośliny liściaste.
                                </span>
                            </p>
                      </div>
                </div>
                <div className="tile is-child box">
                      <div className="">
                          <figure className="image">
                            <img src="background/szkolka/nursery-swierki.jpeg" />
                          </figure>
                          <p className="">
                            <span className="title is-size-5">Świerki i sosny</span><br/>
                            Posiadamy hodowlę świerków srebrnych, jodeł oraz sosien. Oferujemy sprzedaż hurtową oraz detaliczną.
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
                  <p className="">Oferujemy szeroki wybór roślin <strong>żywopłotowych</strong> i szpalerowych takich jak żywotnik zachodni (Thuja occidentalis), żywotnik wschodni (Thuja orientalis), żywotnik olbrzymi (Thuja plicata) i inne. Liczne odmiany tui sprawiają, że wybór tych roślin jest bardzo duży. Mogą być to odmiany o koronach kulistych bądź stożkowatych, wysokie lub niskie, o różnym kolorze igieł. Ze względu na dekoracyjny wygląd, małe wymagania oraz mrozoodporność, żywotniki są częstymi gośćmi w ogrodach ozdobnych.
                  </p>
                  <p className="p-padding-top">Posiadamy w sprzedaży <strong>krzewy kwitnące</strong> takie jak azalie, rhododendrony, azalie, kamelie, forsycje i wiele innych. Oferujemy wybór roślin skalnych, bambusów, traw i innych roślin ogrodowych.</p>
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
                      <img src="background/szkolka/nursery-peonias.jpg" />
                    </figure>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image is-4by3 is-hidden-mobile">
                      <img src="background/szkolka/sukulenty.jpeg" />
                    </figure>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image is-4by3">
                      <img src="background/szkolka/nursery-skalniaki-doniczki.jpeg" />
                    </figure>
                  </div>
                  <div className="tile is-child box">
                    <figure className="image is-4by3 is-hidden-mobile">
                      <img src="background/aranzacja/nursery-hand.jpg" />
                    </figure>
                  </div>
            </div>
        </div>

      </div>
    )
  }
}

export default Szkolka
