"use client";
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const RenderModel = ({children}) => {
  return (
  <Canvas className='w-full h-screen absolute top-0 left-0 -z-10'>
    <Suspense fallback={null}>
        {children}
    </Suspense>
    <Environment preset='dawn' />
  </Canvas>
  )
}

export default RenderModel