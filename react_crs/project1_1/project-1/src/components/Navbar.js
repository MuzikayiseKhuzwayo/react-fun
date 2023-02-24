// Navbar component. Should export an nav with a logo, an h3, and an h4
import React from 'react'
import logo from '../images/logo.svg'

function Navbar(){
 return(
  <div className="Navbar">
   <nav className="header">
    <a href="#home" className="left-nav">
     <img src={logo} alt="react logo" className="nav-logo"></img>
     <h2>ReactFacts</h2>
    </a>
    <h3 className="right-nav">React Course - Project 1</h3>
   </nav>
  </div>
 )
}

export default Navbar