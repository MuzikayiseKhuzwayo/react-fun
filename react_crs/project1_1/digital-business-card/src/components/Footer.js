import React from 'react'
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'

function Footer(){
 return(
  <div className="Footer">
   <h4 className="footer--grab">Why Don't you let M.K. design your next website?</h4>
   <div className="footer--socials">
    <a className="footer--link" href="#twitter"><FaTwitterSquare /></a>
    <a className="footer--link" href="#facebook"><FaFacebookSquare /></a>
    <a className="footer--link" href="#instagram"><FaInstagramSquare /></a>
    <a className="footer--link" href="#github"><FaGithubSquare /></a>
   </div>
  </div>
 )
}

export default Footer