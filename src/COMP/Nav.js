import React from 'react'
import './Nav.css'
export default function nav() {
  return (
    <nav className='nav'>
      <div className="con1">
          <h1 className="name"><a href="/ayush">AYUSH</a></h1>
      </div>
      <div className="con2">
        <h2 className="cs"><a href="/skill">SKILL</a></h2>
        <h2 className="cs"><a href="/PROJECT">PROJECT</a></h2>
        <h2 className="cs"><a href="/Contact">CONTACT</a></h2>
      
      </div>
    </nav>
  )
}

