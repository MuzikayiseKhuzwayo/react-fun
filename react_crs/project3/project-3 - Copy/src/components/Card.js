import React from 'react'
import {FaStar} from 'react-icons/fa'

function Card(props){
 let badgeText
 if(props.item.openSpots === 0){
  badgeText = "SOLD OUT"
 }else if (props.item.location === "Online"){
  badgeText = "ONLINE"
 }

 return(
  <section className="Card">
   <img className="card--photo" alt={props.item.img.imgAlt} src={`../../images/${props.item.img.coverImg}`}></img>
   {badgeText && <div className="card--status">{badgeText}</div>}
   <h4 className="card--rating">
    <FaStar className="card--star" />
    <span className="bold"> {props.item.stats.rating}</span>
    <span className="gray">({props.item.stats.reviewCount}) , </span> 
    <span className="gray"> - {props.item.location}</span>
   </h4>
   <p className="card--title gray bold">{props.item.title}</p>
   <p className="card--price">
    From:  
    <span className="bold"> ${props.item.price}</span>
    <span className="gray"> / person</span>
   </p>
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