import React from 'react'
import jump from 'jump.js'

const HeaderBody = () => (
  <div className="">
    <h1 className="title is-1" onClick={() => jump('.app-body')}>
      <img className="HeaderBody-logo" src="logo.svg"></img> <br />
      <a><h1 className="HeaderBody-title">Wesoły Ogród</h1></a>
    </h1>
    <h2 className="bounce ClickMe" onClick={() => jump('.app-body')}>
      <a>wejdź</a>
    </h2>
  </div>
)

export default HeaderBody
