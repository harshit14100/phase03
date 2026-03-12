import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className='h-screen'>
      <Header/>
      <Outlet/>{/*  keeps the header and footer as it is just changes the content in between */}
      <div className='flex flex-end flex-col'>
      <Footer />
      </div>
    </div>
    </>
  )
}

export default Layout
