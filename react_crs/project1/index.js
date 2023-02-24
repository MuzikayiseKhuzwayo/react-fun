//Code goes here for react
//You have to get the CDNs for development and production
//Then get JSX enabled and set index.js type into babel text

//ReactDOM, from CDN, has a render fucntion which can tell React to render html on the document at a certain position. What we did here was get a div element from the html object and render a h1 element inside it. render() is almost like appending things onto the doc at a certain position.

//Nice thing about React is that it's COMPOSABLE. Functional blocks of code can be replxaced by functions which return those blocks, which then get rendered onto the doc.

//Nice Thing about React? It's DECLARATIVE! You tell it what to do and it does it somehow. Imperative is describing how to do things.

//JSX stands for JS XML whih is markup where we can create html elements in react. It's kind of like a fucntion that when it's run, can use react to create elements that can be displayed on page.
//You can put html element blocks and store them as variables which can get reurned or rendered later. That's JSX.

//import React from "react" allows you to use JSX syntax.

//Composability is awesome because we can create named functions that return components (groups of elements) 
//But you have to pay attention to conventions: wrap in Pascalle Case for component Names, use return syntax inside function, wrap fucntion call in angled brackets

// const sample = (
//   <div>
//    <img src="./images/React-icon.svg.png" alt="react-logo" width="40px"></img>
//    <h1>Hello</h1>
//    <h3>These are some reasons why I love React</h3>
//    <ul>
//     <li>It's Composable, No long Docs</li>
//     <li>It's Declarative, No time wasting</li>
//     <li>It's hireable skill to have</li>
//     <li>It's highly maintained by Facebook/Meta</li>
//     <li>Powers loads of enterprise apps, including mobile apps</li>
//    </ul>
//   </div>
// )

import Header from "./js/Header"
import MainContent from "./js/MainContent"
import Footer from "./js/Footer"

function Page(){
 return(
  <div>
   <Header />
   <MainContent />
   <Footer />
  </div>
 )
}

ReactDOM.render(
 <Page />
 , document.getElementById("root")
)



// ReactDOM.render(
//  page
//  <div>
//   <NavBar />
//   <MainContent />
//  </div>
//  , document.querySelector("#root")
// )

//You can do some imperative coding like this. It's tedious though...
// const loopy = document.createElement("h1")
// loopy.textContent="Hey bro this is tough through JS"
// loopy.className = "header"
// document.getElementById("root").appendChild(loopy)