// Navbar component. Should export an nav with a logo, an h3, and an h4
import React from 'react'

function Main(){
 return(
  <main className="Main">
   <h1 className="main--title">Cool Facts about React</h1>
   <ul className="main--list">
    <li>Was First released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100k stars on Github</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
   </ul>
  </main>
 )
}

export default Main 