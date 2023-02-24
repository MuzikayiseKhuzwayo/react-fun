export default function Header(){
 return(
  <div>
   <header className = "header">
    <nav className="nav">
     <div >
      <img className="image" src="./images/React-icon.svg.png" alt="react-logo"></img>
     </div>
     <div className="nav-list">
      <ul className="nav-items">
       <li><a href="#">More</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">Contact</a></li>
      </ul>
     </div>
    </nav>
   </header>
  </div>
 )
}