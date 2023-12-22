import { useCallback, useEffect, useState, useRef} from 'react'


function App() {

  const [length , setLength] = useState(8);
  const [isNumberAllowed , setIsNumberAllowed] = useState(false);
  const [isCharAllowed , setIsCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordRef = useRef(null)

  function copyToClipBoard() {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(Password)
  }

  // usecallback
  const passwordGenerator =  useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(isNumberAllowed) str += "0123456789"
    if(isCharAllowed) str+= "`@#$%^&*(){}|\/<>";

    for(let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length , isNumberAllowed , isCharAllowed]);

  useEffect(() => {
    passwordGenerator()
  } , [length , isCharAllowed , isNumberAllowed])

  

  return (
    <>
      <h1 className='text-5xl text-white text-center mb-4 '>Password Generator</h1>

    <div className='w-screen object-contain flex justify-center items-center'>
      <div className='w-1/2 bg-slate-500 flex-col'>
        <div className='flex justify-center p-4 mb-3 items-center'>
          <input 
          value={Password}
          readOnly
          className='w-2/3 h-10 font-light text-2xl rounded-md'id='inputText' type="text" placeholder='password' 
          ref={passwordRef}
           />
          
          <button
          
          onClick={copyToClipBoard}
           className='h-10 outline-blue-500 relative right-1 text-white bg-blue-700 hover:bg-blue-600'>COPY</button>
        </div>
        <div className='flex space-x-4 pb-4 justify-center items-center relative right-5'>
          <div className='space-x-1'>
            <input
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
             type="range" max={40} min={6} step={1} value={length}/>
            <label htmlFor="">Length: {length}</label>
          </div>

          <div
          onChange={() => {
            setIsNumberAllowed((prev) => (!prev))
          }}
           className='space-x-1'>
            <input className='cursor-pointer' type="checkbox" id='checkBoxNum'  />
            <label htmlFor="checkBoxNum">Numbers</label>
          </div>

          <div 
          onChange={() => {
            setIsCharAllowed((prev) => (!prev))
          }}
            className='space-x-1'>
            <input className='cursor-pointer' type="checkbox" id='checkboxChar' />
            <label htmlFor="checkboxChar">Charcter</label>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
