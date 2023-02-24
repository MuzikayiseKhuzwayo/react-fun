import React from 'react'
import {FaAirbnb} from 'react-icons/fa'

function Navbar(){
 return(
  <nav className="Nav">
   <a className="nav--logo" href="#home">
    <FaAirbnb className="nav--icon" />
    <h3 className="nav--title">airbnb</h3>
   </a>
  </nav>
 )
}

export default Navbar