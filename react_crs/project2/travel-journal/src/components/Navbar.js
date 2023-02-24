import React from 'react'
import {FaGlobe} from 'react-icons/fa'

function Navbar(){
 return(
  <nav className="Nav">
   <a className="nav--logo" href="#home">
    <FaGlobe className="nav--icon" />
    <h3 className="nav--title">My Travel Journal</h3>
   </a>
  </nav>
 )
}

export default Navbar