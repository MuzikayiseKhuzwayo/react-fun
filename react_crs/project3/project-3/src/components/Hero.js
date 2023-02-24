import React from 'react'
import logo from '../logo.svg'

function Hero(){
 return(
  <section className="Hero">
   <img className="hero--image" alt="react logo" src={logo}></img>
   <h1 className="hero--title">Online Experiences</h1>
   <p className="hero--subtitle">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
  </section>
 )
}

export default Hero