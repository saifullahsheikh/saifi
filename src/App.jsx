import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Components/Header'
import Herosection from './Components/HeroSection'
import Watsapp from './Components/watsapp'

import Statics from './Components/statics'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Form from './Components/Form'
import Footer from './Components/Footer'
import './App.css'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [count, setCount] = useState(0)

  


  
  


  return (
    <>
    <div className='bg-[]'>
     <Header />
     <Watsapp/>
     <Herosection />
     <Statics/>
     <About/>
     <Portfolio />
       <Form/>
     <Footer/>
     </div>
    </>
  )
}

export default App
