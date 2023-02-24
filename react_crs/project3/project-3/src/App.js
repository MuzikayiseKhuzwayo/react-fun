import './App.css';
import Navbar from './components/Navbar'
import Meme from './components/Meme'
import Jokes from './components/Jokes'
import jokesData from './components/jokesData'

function App() {
  const showJokes = jokesData.map(joke => {
    return(
      <Jokes 
        setup={joke.setup}
        punchline={joke.punchline}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Meme />
      {showJokes}
    </div>
  );
}

export default App;

// const thingsArray = ["Thing 1", "Thing 2"]
//  const someStuff = thingsArray.map((item) => {
//     return(
//       <p key={item}>{item}</p>
//     )
//   })

//   function handleClick(){
//     var thingNum = thingsArray.length + 1
//     thingsArray.push(`Thing ${thingNum}`)
//     console.log(thingsArray)
//   }

//  <button onClick={handleClick}>Add Item</button>
//       {someStuff}