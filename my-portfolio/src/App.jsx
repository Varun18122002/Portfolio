import React, { useRef, useState } from 'react'
import { ReactDOM } from 'react'
import { About, Contact, Experience, Navbar, Tech, Works } from './components'
import Blogs from './components/Blogs'
import { BrowserRouter } from 'react-router-dom'
import Video from './components/Video'
import Brain from './components/Brain'
import StarsCanvas from "./components/StarBackground";

import { useScroll } from 'framer-motion'


const App = () => {

  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <BrowserRouter>
      <div className='relative z-30 bg-custom-black'>
        <div>

          <Navbar />
          <StarsCanvas />
          <Video />
        </div>

        <About />
        <div className='block lg:hidden'>
          <Experience />
        </div>

          <div className='hidden lg:flex h-full w-full '>
           
            <div className='w-1/2 overflow' >
              <Experience />
            </div>
            
            <div className='hidden lg:block sticky w-1/2 top-0 z-1 xl:1/2 justify-center pt-32'
            style={{ width: '50%', height: '100vh' }}
            >
              <Brain scrollYProgress={scrollYProgress} />
            </div>
          </div>


          <Tech />
          <Works />
          <Blogs />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
