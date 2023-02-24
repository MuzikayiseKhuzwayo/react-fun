import React from 'react'
import {FaSmileWink} from 'react-icons/fa'

function Navbar(){
 return(
  <nav className="Nav">
   <a className="nav--logo" href="#home">
    <FaSmileWink className="nav--icon" />
    <h3 className="nav--title">Meme Generator</h3>
   </a>
   <h3 className="nav--subtitle">React Course - Project 3</h3>
  </nav>
 )
}

export default Navbar