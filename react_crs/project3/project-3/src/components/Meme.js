import React from 'react'
import {FaImage} from 'react-icons/fa'
import data from './dataObj'

function Meme(){
 const [meme, setMeme] = React.useState(
  {
   memeURL: "../../images/image-1.jpg",
   topText: "",
   bottomText: "",
  })
  const [allMemesData, setAllMemesData] = React.useState(data)

 function handleClick(){
  const ims = data
  let ranNum = Math.floor(Math.random()*ims.length)
  var item = ims[ranNum]
  console.log(item.img.coverImg)
  setMeme(prevMeme => ({
   ...prevMeme,
   memeURL: `../../images/${item.img.coverImg}`
  }))
 }

 return(
  <main className="Main">
   <div className="form" action="" method="">
    <input id="top-text" className="form--input" type="text" placeholder='Top Text'/>
    <input id="bottom-text"className="form--input" type='text' placeholder='Bottom Text'/>
    <button onClick={handleClick} className="form--button">
     Get A New Meme Image
     <FaImage className="form--icon" />
    </button>
   </div>
   <img className="form--image" alt="memage" src={meme.memeURL}></img>
  </main>
 )
}

export default Meme
