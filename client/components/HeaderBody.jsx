import React from 'react'
import jump from 'jump.js'

const HeaderBody = () => (
  <div className="">
    <h1 className="title is-1" onClick={() => jump('.app-body')}>
      <img className="HeaderBody-logo" src="logo.svg"></img> <br />
      <a>Wesoły Ogród</a>
    </h1>
    <h2 className="animated bounce ClickMe" onClick={() => jump('.app-body')}>
      <a>kliknij</a>
    </h2>
  </div>
)

export default HeaderBody
