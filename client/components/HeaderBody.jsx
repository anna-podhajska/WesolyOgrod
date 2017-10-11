import React from 'react'
import jump from 'jump.js'

const HeaderBody = () => (
  <div className="container">
    <span className="" onClick={() => jump('.app-body')}>
        <img className="HeaderBody-logo" src="logo_2.png"></img> <br />
        <a>
          <h1 className="title is-1 is-spaced is-large">Wesoły Ogród</h1>
        </a>
        <a>
          <h3 className="subtitle is-3 bounce animated ClickMe">
          wejdź
          </h3>
        </a>

    </span>
  </div>
);

export default HeaderBody
