import React from 'react'
import jump from 'jump.js'

class CentrumOgrodnicze extends React.Component {
  render(){
    return (

      <div className="container Centrum-container">

            <div className="tile is-ancestor has-text-centered">
              <article className="tile is-child box">
                <p className="title Centrum-title">Centrum ogrodnicze</p>
              </article>
            </div>


            <div className="tile is-ancestor ">

                  <div className="tile is-parent is-6 is-vertical">
                    <article className="tile is-child box">
                      <p className="title">Pielęgnacja ogrodu</p>
                      <p className="subtitle">akcesoria ogrodnicze</p>
                      <div className="">
                        <figure className="image">
                          <img src="background/centrum/hat.jpeg" />
                        </figure>
                        <p className="p-padding-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                      </div>
                    </article>
                  </div>

                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">Środki ochrony</p>
                      <p className="subtitle">ochrona i nawożenie</p>
                      <div className="">
                        <figure className="image">
                          <img src="background/centrum/strawberies.jpeg" />
                        </figure>
                        <p className="p-padding-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                      </div>
                    </article>
                  </div>

                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">Kwiaciarnia</p>
                      <p className="subtitle">rośliny doniczkowe</p>
                      <div className="">
                        <figure className="image">
                          <img src="background/centrum/peonias.jpeg" />
                        </figure>
                        <p className="p-padding-top">Oferujemy w sprzedaży rośliny doniczkowe, kwiaty cięte, cebule, donice i wiele innych.</p>
                      </div>
                    </article>
                  </div>
            </div>


            <div className="tile is-ancestor ">

                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">Kwiaciarnia</p>
                    <p className="subtitle">rośliny doniczkowe</p>
                    <div className="">
                      <figure className="image">
                        <img src="background/centrum/peonias.jpeg" />
                      </figure>
                      <p className="p-padding-top">Oferujemy w sprzedaży rośliny doniczkowe, kwiaty cięte, cebule, donice i wiele innych.</p>
                    </div>
                  </article>
                </div>

                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child box">
                      <p className="title">Pielęgnacja ogrodu</p>
                      <p className="subtitle">akcesoria ogrodnicze</p>
                      <div className="">
                        <figure className="image">
                          <img src="background/centrum/hat.jpeg" />
                        </figure>
                        <p className="p-padding-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                      </div>
                    </article>
                  </div>

                  <div className="tile is-parent is-6">
                    <article className="tile is-child box">
                      <p className="title">Środki ochrony</p>
                      <p className="subtitle">ochrona i nawożenie</p>
                      <div className="">
                        <figure className="image">
                          <img src="background/centrum/peonias.jpeg" />
                        </figure>
                        <p className="p-padding-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                      </div>
                    </article>
                  </div>


            </div>






      </div>

    )
  }
}

export default CentrumOgrodnicze
