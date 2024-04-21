import React from 'react'
import { Html , useProgress } from '@react-three/drei'

const CanvasLoader = () => {

  const {progress} = useProgress();
  return (
    
    <Html>
      <span className='canvas-load'>

      </span>
      <p className='text-red-500'
      style={{
        fontSize:14,

        fontWeight: 800,
        marginTop: 40
      }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader