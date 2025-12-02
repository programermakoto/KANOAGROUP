import React from 'react'

export default function Movie() {
  return (
    <div className="w-full">
      <video 
        src="/leaf.mp4"
        loop
        muted
        autoPlay   
        className="w-full h-auto object-cover"
      />
    </div>
  )
}
