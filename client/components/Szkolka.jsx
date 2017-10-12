import React from 'react'
import jump from 'jump.js'

class Szkolka extends React.Component {
  render(){
    return (
      <div className="Szkolka-container p-padding-top">

        <div className="tile is-ancestor has-text-centered">
          <article className="tile is-child box">
            <p className="title Centrum-title">SZKÓŁKA</p>
          </article>
        </div>

        <div className="tile is-ancestor">
            <div className="tile is-3 is-vertical is-parent">
                <div className="tile is-child box">
                      <div className="">
                          <figure className="image">
                            <img src="background/szkolka/nursery-form.jpg" />
                          </figure>
                          <span className="subtitle"><strong>Rośliny formowane</strong></span>
                          <p className="">
                            Produkujemy rośliny formowane różnych rozmiarów. Nadają się one zarówno do hodowli w gruncie jak i donicach. Formowane są thuje, cyprysy, jałowce oraz rośliny liściaste.
                          </p>
                      </div>
                      <div className="p-padding-top">
                          <figure className="image">
                            <img src="background/szkolka/nursery-swierki.jpeg" />
                          </figure>
                          <span className="subtitle"><strong>Świerki i sosny</strong></span>
                          <p className="">
                            Posiadamy hodowlę świerków srebrnych, jodeł oraz sosien. Oferujemy sprzedaż hurtową oraz detaliczną. Prowadzimy sprzedaż ciętych i doniczkowych choinek w okresie świątecznym.
                          </p>
                      </div>
                </div>
            </div>



            <div className="tile is-parent ">
                <article className="tile is-child box has-text-justified">
                    <p className="subtitle">Historia i zakres działalności</p>
                    <p className="">Mamy <strong>30 lat doświadczenia</strong>. Nasza Szkółka została powstała w roku 1986 w Olszowej w województwie wielkopolskim. Przez kolejne lata działalności rozrastała się dzięki inwestycjom w sprzęt, wprowadzeniu nowych roślin oraz poszerzeniu terenu uprawny.</p>

                    <p className="p-padding-top">Oferta jest skierowana zarówno do klientów indywidualnych jak i punktów sprzedaży roślin. Posiadamy w ofercie hurtowe ilości <strong>świerka</strong>, sosny, jodeł, jałowców oraz drzew formowanych.</p>

                    <p className="p-padding-top">Posiadamy wybór roślin <strong>żywopłotowych</strong> i szpalerowych takich jak żywotnik zachodni (Thuja occidentalis), żywotnik wschodni (Thuja orientalis), żywotnik olbrzymi (Thuja plicata) i inne. Liczne odmiany tui sprawiają, że wybór tych roślin jest bardzo duży. Mogą być to odmiany o koronach kulistych bądź stożkowatych, wysokie lub niskie, o różnym kolorze igieł. Ze względu na dekoracyjny wygląd, małe wymagania oraz mrozoodporność, żywotniki są częstymi gośćmi w ogrodach ozdobnych.
                    </p>

                    <p className="p-padding-top">Posiadamy w sprzedaży <strong>krzewy kwitnące</strong> takie jak azalie, rhododendrony, azalie, kamelie, forsycje i wiele innych. Oferujemy wybór roślin skalnych, bambusów, traw i innych roślin ogrodowych.</p>

                    <p className="p-padding-top">Oferujemy <strong>fachową pomoc</strong> w dobraniu roślin w zależnoci od rodzaju gleby, nasłonecznienia oraz sposobu użytkowania terenu zielonego.</p>
                </article>
            </div>

            <div className="tile is-3 is-vertical is-parent">
                <div className="tile is-child box">
                    <figure className="image">
                      <img src="background/szkolka/nursery-peonias.jpg" />
                    </figure>
                      <figure className="image p-padding-top is-hidden-mobile">
                      <img src="background/szkolka/azalie_zolte.jpg" />
                    </figure>
                    <figure className="image p-padding-top">
                      <img src="background/szkolka/sukulenty.jpeg" />
                    </figure>
                    <figure className="image p-padding-top is-hidden-mobile">
                      <img src="background/szkolka/nursery-swierk-galez.jpeg" />
                    </figure>

                </div>
            </div>

        </div>

        <div className="tile is-ancestor has-text-centered homeicon" onClick={()=>jump(".app-body")}>
          <article className="tile is-child box">
            <span className="icon">
              <i className="fa fa-home is-large"></i>
            </span>
            <p className="title Centrum-title"></p>
          </article>
        </div>


      </div>
    )
  }
}

export default Szkolka
