// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home' 
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </div>
  )
}

export default App