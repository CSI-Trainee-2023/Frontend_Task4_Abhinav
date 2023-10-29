import React from 'react'
import Header from './Components/Header'
import Logo from './Components/logo'
import Footer from './Components/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>
   <Logo />
   <Header/>
   <div>FUCK OFF</div>
   <Email/>
   <Footer/>
   </>
  )
}

export default Layout