import React from 'react'
import {FaEnvelope, FaLinkedin} from 'react-icons/fa'

function Main(){
 return(
  <main className="Main">
   <h1 className="main--title">Muzikayise Khuzwayo</h1>
   <h3 className="main--subtitle">Frontend Developer</h3>
   <h3 className="main--subtitle">Blogger, Freelancer, Dope Human Being</h3>
   <div className="main--buttons">
    <a className="main--email-button" href="#email"><FaEnvelope /> Email</a>
    <a className="main--linkedin-button" href="#linkedin"><FaLinkedin /> Linkedin</a>
   </div>
  </main>
 )
}

export default Main