import React from 'react'
import jump from 'jump.js'

class CentrumOgrodnicze extends React.Component {
  render(){
    return (

      <div className="Centrum-container">

        <div className="tile is-ancestor has-text-centered p-margin-top" onClick={()=>jump(".app-body")}>
          <article className="tile is-child box">
            <span className="icon homeicon">
              <i className="fa fa-home is-large"></i>
            </span>
            <p className="title Centrum-title"></p>
          </article>
        </div>

        <div className="tile is-ancestor has-text-centered p-margin-top Centrum-jump">
          <article className="tile is-child box">
            <p className="title Centrum-title">CENTRUM OGRODNICZE</p>
          </article>
        </div>


          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child box kwiaciarniajump" onClick={()=> jump(".kwiaciarniajump")}>
                      <p className="title is-size-5">Kwiaciarnia</p>
                      <p className="subtitle">kwiaty cięte oraz rośliny doniczkowe</p>
                      <div className="">
                        <figure className="image">
                          <img src="images/centrum/florist-white.jpeg" />
                        </figure>
                        <p className="p-padding-top">Oferujemy w sprzedaży rośliny doniczkowe, kwiaty cięte, obsadzane donice i wiele innych.</p>
                      </div>
                    </article>

                    <article className="tile is-child box nawozyjump" onClick={()=> jump(".nawozyjump")}>
                      <p className="title is-size-5">Nawozy</p>
                      <p className="subtitle">nawożenie i zakwaszanie roślin</p>
                      <div className="">
                          <p className="content">Gwarantujemy fachową poradę przy wyborze produktów i doradzamy jak pielęgnować rośliny.</p>

                          <p className="content">
                            Oferujemy szeroki wybór nawozów dla roślin ozdobnych i traw.
                          </p>
                          <figure className="image p-padding-bottom">
                            <img src="images/centrum/grass.jpeg" />
                          </figure>

                          <p className="content">
                            Posiadamy specjalistyczne nawozy do warzyw, owoców, drzew i krzewów plonujących oraz najlepsze na rynku nawozy do borówek
                          </p>
                          <figure className="image">
                            <img src="images/centrum/blueberries.jpeg" />
                          </figure>
                      </div>
                    </article>
                  </div>
                <div className="tile is-parent">
                    <article className="tile is-child box cebulejump" onClick={()=> jump(".cebulejump")}>
                        <p className="title is-size-5">Cebule i nasiona</p>
                        <p className="subtitle">cebulki kwiatowe, nasiona traw</p>
                        <p className="content"> Oferujemy wybór cebulek zarówno popularnych gatunków kwiatów (np. cebulki tulipanów, róże, krokusy, narcyzy, przebiśniegi, malwy, mieczyki, hiacynty, piwonie, irysy, funkie, mieczyki, begonie, zawilce, hiacynty) a także tych oryginalnych i mniej znanych (szafirki, amarylisy, bodziszki, dalie cebule, czosnki, zimowity).</p>
                        <p className="content"> W naszej ofercie znajduje się bogaty wybór nasion traw różnych gatunków. Pomożemy dobrać mieszankę trawnikową zależnie od nasłonecznienia, nawodnienia i uzytkowania trawnika. </p>
                        <div className="p-padding-top">
                          <figure className="image">
                            <img src="images/centrum/bulbs3.jpeg" />
                          </figure>
                        </div>
                        <div className="p-padding-top is-hidden-mobile">
                          <figure className="image">
                            <img src="images/centrum/bulbs-przebisnieg.jpeg" />
                          </figure>
                        </div>
                        <div className="p-padding-top is-hidden-mobile">
                          <figure className="image">
                            <img src="images/centrum/daffodil.jpeg" />
                          </figure>
                        </div>

                    </article>
                </div>
              </div>
            </div>

            <div className="tile is-parent is-vertical">
              <article className="tile is-child box" onClick={()=> jump(".architekturajump")}>
                <p className="title is-size-5 architekturajump">Architektura ogrodowa</p>
                <p className="subtitle">pergole, płoty, donice</p>
                <p className="content">Meble ogrodowe, pergole, płoty, rollbordery, donice i inne. Oferujemy aranżację i budowę pergol i altan ogrodowych na indywidualne zamówienie.</p>
                <figure className="image">
                  <img src="images/centrum/pergola.jpeg" />
                </figure>
                <figure className="image p-padding-top">
                  <img src="images/centrum/wooden-fence.jpeg" />
                </figure>
              </article>
              <article className="tile is-child box pielegnacjajump" onClick={()=> jump(".pielegnacjajump")}>
                  <p className="title is-size-5">Pielęgnacja ogrodu</p>
                  <p className="subtitle">akcesoria ogrodnicze</p>
                      <figure className="image">
                        <img src="images/centrum/ziemia-lopatka.jpeg" />
                      </figure>
                      <p className="p-padding-top">Sprzęt i akcesoria do pielęgnacji i nawadniania ogrodu. Węże ogrodowe, elementy systemów nawadniania, sekatory, opryskiwacze i inne.</p>
              </article>
            </div>

          </div>

      </div>


    )
  }
}

export default CentrumOgrodnicze
