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
