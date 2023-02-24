import React from 'react'
//import ReactDOM from 'react-dom'

function About(props){
 const date= new Date()
 const hours = date.getHours()
 const minutes = date.getMinutes()
 let timeOfDay

 if(hours < 12){
  timeOfDay = "Morning"
 }
 else if(hours >= 12 && hours < 15){
  timeOfDay = "Day"
 }
 else if(hours>=15 && hours< 19){
  timeOfDay = "Afternoon"
 }
 else{
  timeOfDay = "Night"
 }
 return(
  <div className="About">
   <p>Good {timeOfDay}, {props.firstName} {props.lastName}! The time is currently {hours}:{minutes}</p>
  </div>
 )
}

export default About

// Props make components more reusable. You pass data to make it look or act in a certain way
// In the same way you pass attriputes to html elements, you pass props using curly brackets
// You CANNOT add a prop to a native dom Element like div,img,p... They will be turned into real DOM elements and those do not have new props
// You receive props by calling them in the function property and calling them as objects in the function