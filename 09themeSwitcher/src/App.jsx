import { useEffect, useState } from "react"
import "./App.css"
import { ThemeProvider } from "./Context/theme"
import ThemeBtn from "./Components/ThemeBtn"
import Card from "./Components/Card"

function App() {

  const [themeMode , setThemeMode] = useState("light")
  const darkTheme = function() {
    setThemeMode("dark")
  }
  const lightTheme = function() {
    setThemeMode("light")
  }

  useEffect(() => {
    const htmlBody = document.querySelector("html");
    htmlBody.classList.remove("light" , "dark");

    htmlBody.classList.add(themeMode);

  } , [themeMode]);


  return (

    <ThemeProvider value={{themeMode, darkTheme , lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn />
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card />
                </div>
            </div>
      </div>
    </ThemeProvider>
  )
}

export default App
