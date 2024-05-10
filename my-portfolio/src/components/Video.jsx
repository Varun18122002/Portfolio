import React, { useState } from 'react'
import videoBG from '../video/test2.mp4'
import Hero from './Hero'
// import './Video.css'

const Video =() => (
    <div className="relative w-full h-screen overflow-hidden">
    
        {/* <video className='sm:block' style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={videoBG} typeof='video/mp4' /> */}
        {/* <video  className="absolute top-0 left-0 w-full h-full object-cover" autoPlay  loop muted style={{  width: '100%', height: '100%', objectFit: 'cover' }} src={videoBG} typeof='video/mp4'/> */}
        <div className='absolute top-0 w-full h-full flex justify-center'>
            <Hero />
        </div>

    </div>
)

export default Video