import Image from 'next/image'
import React from 'react'

export default function Mission() {
  return (
    <div className='w-full md:w-2/3  py-20 h-auto lg:h-screen mx-auto flex flex-col justify-center items-center '>
      <h2 className='my-4   text-4xl md:text-3xl text-center'>Mission & Vision</h2>
      <h4 className='my-4 text-xs md:text-2xl text-center'>「これは面白い！を創り<br className="md:hidden"></br>∴<br className="md:hidden"></br>自由を広げる。」</h4>
      <small className='block text-xs text-center'>This is fun! Create it and expand freedom.</small>
      <Image src="/kanoa-logo.PNG" alt='KANOAGROUPロゴ画像' width={100} height={100} className='my-4'/>
    </div>
  )
}
