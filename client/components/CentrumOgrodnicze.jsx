import React from 'react'
import jump from 'jump.js'

class CentrumOgrodnicze extends React.Component {
  render(){
    return (

      <div className="Centrum-container">

        <div className="tile is-ancestor has-text-centered">
          <article className="tile is-child box">
            <p className="title Centrum-title">CENTRUM OGRODNICZE</p>
          </article>
        </div>

          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child box">
                    <p className="title">Środki ochrony roślin</p>
                    <p className="subtitle">ochrona i nawożenie</p>
                    <div className="">
                      <figure className="image">
                        <img src="background/centrum/pears.jpeg" />
                      </figure>
                      <p className="content p-padding-top">Oferujemy w sprzedaży środki ochrony roślin oraz nawozy. Gwarantujemy fachową poradę przy wyborze produktów i doradzamy jak pielęgnować rośliny.</p>
                      <p className="content ">Polecamy szeroką gamę środków, które posiadają działania chwastobójcze, grzybobójcze oraz preparaty zwalczające owady i szkodniki żerujące na roślinach.</p>
                      <p className="content ">Oferujemy również szeroki wybór nawozów dla roślin domowych, ogrodowych jak i traw. Posiadamy również specjalistyczne nawozy do warzyw i owoców, gwarantujące bogate plony świetnej jakości, nawozy do drzew i krzewów ozdobnych oraz plonujących i najlepsze na rynku nawozy do borówek i azalii. </p>
                    </div>
                  </article>
                    <article className="tile is-child box">
                      <p className="title">Kwiaciarnia</p>
                      <p className="subtitle">kwiaty cięte oraz rośliny doniczkowe</p>
                      <div className="">
                        <figure className="image">
                          <img src="background/centrum/florist-white.jpeg" />
                        </figure>
                        <p className="p-padding-top">Oferujemy w sprzedaży rośliny doniczkowe, kwiaty cięte, obsadzane donice i wiele innych.</p>
                      </div>
                    </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">Cebule i nasiona</p>
                    <p className="subtitle">cebule, nasiona, rośliny doniczkowe</p>

                    <p className="content">Posiadamy szeroki wybór cebul kwiatowych, zarówno popularnych gatunków kwiatów (np. cebulki tulipanów, róże, krokusy, narcyzy, przebiśniegi, malwy, mieczyki, hiacynty, piwonie, irysy, kosaćce, funkie, mieczyki, begonie, zawilce, hiacynty) a także tych oryginalnych i mniej znanych (rozchodnik, szafirki, szachownice, amarylis, bodziszki, dalie cebule, czosnki, zimowit, śnieżnik).</p>
                    <p className="content"> Posiadamy również w ofercie nasiona gatunkowych traw. </p>

                    <div className="p-padding-top">
                      <figure className="image">
                        <img src="background/centrum/daffodil.jpeg" />
                      </figure>
                    </div>
                    <div className="p-padding-top">
                      <figure className="image">
                        <img src="background/centrum/bulbs-przebisnieg.jpeg" />
                      </figure>
                      {/* <p className="p-padding-top">onsectetur adipiscing elit. Proin ornare magna eros.</p> */}
                    </div>
                    <div className="p-padding-top">
                      <figure className="image">
                        <img src="background/centrum/grass.jpeg" />
                      </figure>
                      {/* <p className="p-padding-top">Nasiona traw, pielęknacja, nawożenie i odchwaszczanie trawników.</p> */}
                    </div>


                  </article>
                </div>
              </div>
            </div>

            <div className="tile is-parent">

              <article className="tile is-child box">
                  <div className="">
                    <p className="title">Pielęgnacja ogrodu</p>
                    <p className="subtitle">akcesoria ogrodnicze</p>
                        <div className="">
                          <figure className="image">
                            <img src="background/centrum/lawn.jpeg" />
                          </figure>
                          <p className="p-padding-top">Sprzęt i akcesoria do pielęgnacji i nawadniania ogrodu. </p>
                        </div>
                  </div>
                  <div className="">
                        <div className="p-padding-top">
                          <figure className="image">
                            <img src="background/centrum/hat.jpeg" />
                          </figure>
                          <p className="p-padding-top">Akcesoria do pielęgnacji, przycinania i przesadzania roślin.</p>
                        </div>
                  </div>
                  <div className="">
                        <div className="p-padding-top">
                          <figure className="image">
                            <img src="background/centrum/wooden-fence.jpeg" />
                          </figure>
                          <p className="p-padding-top">Architektura ogrodowa. Pergole, płoty, rollbordery, donice i meble ogrodowe.</p>
                        </div>
                  </div>
              </article>

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

export default CentrumOgrodnicze
