import React , { useState } from 'react'
import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider >
      <h1>Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
