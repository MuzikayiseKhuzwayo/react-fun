import React from 'react'
import Count from './Count'
import box from './box'
import Boxes from './Boxes'

function Boo(props){
 const stylesLight = {
  backgroundColor: "#cccccc",
 }
 const stylesDark = {
  backgroundColor: "#333333",
  color: "white",
 }

 const [isImportant, setIsImportant] = React.useState(true)
 const [num, setNum] = React.useState(0)
 const [isGoingOut, setIsGoingOut] = React.useState(true)
 const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
 const [boxesOn, setBoxesOn] = React.useState(box)
 const [darkModeOn, setDarkModeOn] = React.useState(props.darkMode)

 function handleClickOne(){
  setIsImportant(isImportant ? false : true)
  setDarkModeOn(darkModeOn ? false : true)
 }

 function handleClickTwo(){
  setIsGoingOut(prevState => !prevState)
 }

 function handleSubtraction(){
  setNum(prevCount => prevCount - 1)
 }

 function handleAddition(){
  setNum(prevCount => prevCount + 1)
 }

 var seeThings = thingsArray.map(item => {
  return(<p key={item}>{item}</p>)
 })

 function addThings(){
  setThingsArray(prevArray => [...prevArray, (`Thing ${prevArray.length + 1}`)])  
 }

 function toggle(id){
  setBoxesOn(prevBoxes => {
   return prevBoxes.map((box) => {
    return box.id === id ? {...box, on: !box.on} : box
   })
  })
 }

 var seeBoxes = boxesOn.map(item => {
  return(
   <Boxes 
    handleClick={toggle}
    on={item.on}
    key={item.id}
    id={item.id}
   />
  )
 })

 return(
  <div style={darkModeOn ? stylesDark : stylesLight}>
   <h1>Is state Important to Know?</h1>
   <button onClick={handleClickOne}>{isImportant ? "Fuck Yeah!!" : "Hell No!!"}</button>
   <h1>Are you going Out Today?</h1>
   <button onClick={handleClickTwo}>{isGoingOut ? "Yeah Bro!" : "Nah Bro!"}</button>
   <hr />
   <h1>Counter Example</h1>
   <div className="flex">
    <button onClick={handleSubtraction}>-</button>
    <Count count={num} />
    <button onClick={handleAddition}>+</button>
   </div>
   <hr />
   <button onClick={addThings}>Add Item</button>
   {seeThings}
   <hr />
   <h1>Boxes Go Here</h1>
   <div className="flex">
    {seeBoxes}
   </div>
  </div>
 )
}

export default Boo