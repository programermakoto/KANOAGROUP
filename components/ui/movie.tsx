import React from 'react'

export default function Movie() {
  return (
    <div className="w-full">
      <video 
        src="/op.mp4"
        loop
        muted
        autoPlay   
        className="w-full h-auto object-cover"
      />
    </div>
  )
}
