import React from 'react';
import Header from './Components/Header'
import Logo from './Components/logo'
import Search from './Components/Search'
import Shipping from './Components/shipping';
import Slider from './Components/slider'
import Info1 from './Components/Info1'
import Item from './Components/8item'
import Footer from './Components/footer'
import FullSize from './Components/fullsize'
import Toprating from './Components/toprated';
import Email from './Components/emailus';


function App() {
  return (
  <>
   <Logo />
   <Header/>
   <Search/>
   <Shipping/>
   <Slider/>
   <Info1/>
   <Item/>
   <FullSize/>
   <Toprating/>
   <Email/>
   <Footer/>
  </>
  )
}
export default App
