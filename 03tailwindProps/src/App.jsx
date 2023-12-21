import Card from "./components/Card"
import './App.css'

function App() {
  const myObj = {
    name: "Rohan",
    age: 19
  }
  // someObj = {myObj} we can pass obj array in variables
  return (
    <>
      <h1 className='text-5xl text-black bg-green-300 p-4 rounded-xl mb-10'>Tailwind test</h1>

      <Card name="Rohan" btnText = "Visit me"/>
      <Card name="Rohit" btnText = "click me"/>

    </>
  )
}

export default App
