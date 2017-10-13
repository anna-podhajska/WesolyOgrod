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




      </div>
    )
  }
}

export default Aranzacja
