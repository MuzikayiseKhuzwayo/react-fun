import React from 'react'

function Jokes(props){
 const [isShown, setIsShown] = React.useState(false)

 function toggle(){
  setIsShown(prevState => prevState ? false : true)
 }
 return(
  <div>
   {props.setup && <h3>{props.setup}</h3>}
   <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>
   {isShown && <p>{props.punchline}</p>}
   <hr />
  </div>
 )
}

export default Jokes