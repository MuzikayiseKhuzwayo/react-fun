import React from 'react'
import {FaStar, FaLocationArrow, FaLink} from 'react-icons/fa'

function Card(props){

 return(
  <section className="Card">
   <div className="container container-1">
    <img className="card--photo" alt={props.item.img.imgAlt} src={`../../images/${props.item.img.coverImg}`}></img>
   </div>
   <div className="container container-2">
    <p className="bold">
     <FaLocationArrow className="card--icon card--icon-1" />
     <span className="card--location"> {props.item.location} </span>
     <FaLink className="card--icon card--icon-2" />
     <a href={props.item.googleMaps} className="card--g-map">View on Google Maps </a>
    </p>
    <h2 className="card--title">{props.item.title}</h2>
    <p className="bold card--dates">{props.item.duration.startDate} - {props.item.duration.endDate}
    </p>
    <p className="card--experience">{props.item.experience}</p>
    <p className="card--rating bold">
     The View: <span><FaStar className="card--icon card--icon-3"/>{props.item.stats.viewRating} </span>
    </p>
    <p className="card--rating bold">
     The Fun: <span><FaStar className="card--icon card--icon-3"/>{props.item.stats.funRating}</span>
    </p>
   </div>
  </section>
 )
}

export default Card

// const nums = [1,2,3,4,5]
// const squared = nums.map(function(item){
//  return item * item
// })

// console.log(squared)

// const names = ["alice", "bob", "ben", "peter", "charlie"]
// const capitalised = names.map(function(name){
//  return name.substring(0,1).toUpperCase()+ name.substring(1)
// })

// console.log(capitalised)

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// const jsxed = pokemon.map((name) => {
//  return `<p>${name}</p>`
// })

// console.log(jsxed)