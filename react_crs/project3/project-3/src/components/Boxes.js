import React from 'react'

export default function Boxes(props){

 const styles={
  backgroundColor: props.on ? "#111111" : "white",
 }

 return(
 <div onClick={() => props.handleClick(props.id)} style={styles} className="boo--box"></div>)
}