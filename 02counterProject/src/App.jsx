import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

function App() {
  // let score = 5;
  let [score , setScore] = useState(5);

  function addValue () {
    score += 1;

    if(score > 20) {
      score = 20;
      alert("score value should not exceed 20");
    }
    else setScore(score);

    console.log(score);
  }
  function decreaseValue() {
    score -= 1;

    if(score < 0) {
      score = 0;
      alert("score value not allowed to go below zero");
    }
    else setScore(score);

    console.log(score);
  }

   return (
    <>
      <h1>Chai aur React </h1>
      <h2>Counter Value : {score}</h2>

      <button
      onClick={addValue} 
      >Add Value</button>
      <br />
      <button
      onClick={decreaseValue} 
      >Decrease Value</button>
    </>
  )
}

export default App
