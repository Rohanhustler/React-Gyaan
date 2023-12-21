

import { useState } from "react"

function App() {
  const [color , setColor] = useState("olive");
  return (
    <>
    <div className='h-screen w-screen flex justify-center items-end bg-black' style={{backgroundColor: color}}>

      <div className='flex h-20  bg-black rounded-3xl justify-center items-center'>

      <button onClick={() => setColor("red")}  className='h-16 w-20 rounded-full bg-red-800 cursor-pointer m-2 text-white border border-red-700 hover:bg-red-600 transition-colors'>Red</button>

      <button onClick={() => setColor("green")} className='h-16 w-20 rounded-full bg-green-800 cursor-pointer m-2 text-white border border-green-700 hover:bg-green-600 transition-colors' >Green</button>

      <button onClick={() => setColor("blue")} className='h-16 w-20 rounded-full bg-blue-800 cursor-pointer m-2 text-white border border-blue-700 hover:bg-blue-600 transition-colors'>Blue</button>

      <button onClick={() => setColor("olive")} className='h-16 w-20 rounded-full bg-yellow-700  cursor-pointer m-2 text-white border border-yellow-700 hover:bg-yellow-800 transition-colors'>Olive</button>

      <button onClick={() => setColor("gray")} className='h-16 w-20 rounded-full bg-gray-300 cursor-pointer m-2 text-white border border-gray-700 hover:bg-gray-600 transition-colors'>Gray</button>

      <button onClick={() => setColor("yellow")} className='h-16 w-20 rounded-full bg-yellow-400  cursor-pointer m-2 text-white border border-yellow-400 hover:bg-yellow-300 transition-colors'>Yellow</button>

      <button onClick={() => setColor("pink")} className='h-16 w-20 rounded-full bg-pink-800 cursor-pointer m-2 text-white border border-pink-700 hover:bg-pink-600 transition-colors'>Pink</button>

      <button onClick={() => setColor("lavender")} className='h-16 w-20 rounded-full bg-gray-400 cursor-pointer m-2 text-white border border-gray-700 hover:bg-gray-600 transition-colors'>Lavender</button>

      <button onClick={() => setColor("white")} className='h-16 w-20 rounded-full bg-white cursor-pointer m-2 text-black border border-whitetransition-colors'>White</button>

      <button onClick={() => setColor("black")} className='h-16 w-20 rounded-full bg-slate-600 cursor-pointer m-2 text-white border border-black transition-colors'>black</button>
      </div>
    </div>
    </>
  )
}

export default App
