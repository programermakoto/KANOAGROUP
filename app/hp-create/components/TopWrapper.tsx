import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopWrapper() {
  return (
    <div className='w-full h-auto md:h-screen flex flex-col md:flex-row justify-around items-center py-10'>
      <div className='w-full md:w-2/4'>
        <h1 className='text-2xl text-center md:text-left md:text-5xl font-bold text-sky-600'><span className='text-2xl md:text-9xl mx-2 '>3</span><span className='text-orange-500'>M</span>in-HP-CREATE</h1>
        <hr></hr>
        <p className='text-xs text-sky-600 '>あなたのサイトを「スピード」「集客」「希少性」「デザイン力」「わかりやすさ」を武器にたった３分のヒアリングで作成いたします。</p>
        <Link href="tel:050-8887-2035" className=" w-1/2 mx-auto sm:mx-0 my-3 md:mt-10 rounded-full text-center py-3 text-sm hover:underline block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]">無料相談</Link>
      </div>
      <div className='w-1.5/4 '>
        <Image className='w-full' src="/woman.png" width={200} height={200} alt='HP-CREATE画像' ></Image>
      </div>
    </div>
  )
}
