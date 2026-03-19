import { useEffect, useState } from 'react'
import './App.css'
import { Themecontext } from './context/Theme'
import { Button } from './components/Button';
import { Card } from './components/Card';
// import Login from './components/Login'
// import Profile from './components/Profile'
// import { UserContextProvider } from './context/UserContextProvider'

function App() {

  const [thememode ,setthememode] = useState("light");

  const lighttheme = ()=>{
    setthememode("light")
  }
  const darktheme = ()=>{
    setthememode("dark")
  }

  useEffect(() => {
    document.querySelector('html')?.classList.remove("light", "dark");

    document.querySelector("html")?.classList.add(thememode)
  }, [thememode])
  
  return (
    // <UserContextProvider>
    //  <h1>Heyy there react</h1>
    //  <Login/>
    //  <Profile/>
    // </UserContextProvider>

    <Themecontext value={{thememode, lighttheme, darktheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <Button/>
      </div>
      <div className="w-full max-w-sm mx-auto">
          <Card />
         
      </div>
      </div>
    </div>
  </Themecontext>
  )
}

export default App
