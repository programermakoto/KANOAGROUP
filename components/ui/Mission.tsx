import Image from 'next/image'
import React from 'react'

export default function Mission() {
  return (
    <div className='w-1/2 h-screen mx-auto flex flex-col justify-center items-center '>
      <h1 className='my-4 text-3xl text-center'>Mission & Vision</h1>
      <h1 className='my-4 text-2xl text-center'>「これは面白い！を創り∴自由を広げる。」</h1>
      <small className='block text-center'>"This is fun! Create it and expand freedom."</small>
      <Image src="/kanoa-logo.PNG" alt='KANOAGROUPロゴ画像' width={100} height={100} className='my-4'/>

    </div >
  )
}
