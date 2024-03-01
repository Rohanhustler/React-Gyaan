import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <h1>hello from main.jsx file to check its working like that or not</h1>
  )
}

// const reactElement = {
//   type: "a",
//   props: {
//       href: "https://www.google.com/",
//       target: "_blank"
//   },
//   children: "Click me to visit google"
// }

const anotherElement = (<a href='https://www.google.com/' target='_blank'>Vist Google</a>)

const globalVariable = 10;

const reactElement = React.createElement(
  "a",
  {href : "https://www.google.com/", target: "_blank"},
  "visit google",
  globalVariable
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

/* React uses a virtual DOM, which is a lightweight copy of the real DOM. This virtual DOM is kept in memory and is used to calculate the difference between the current state of the UI and the desired state.
React uses a diffing algorithm to compare the virtual DOM with the real DOM. This algorithm determines the smallest set of changes that need to be made to the real DOM in order to bring it in line with the virtual DOM.
React then updates the real DOM with the changes that were determined by the diffing algorithm.
This process is very efficient because it only updates the parts of the DOM that have actually changed. This can lead to significant performance improvements, especially for applications with complex UIs. */
