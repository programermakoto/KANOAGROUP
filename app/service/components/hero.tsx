import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='container h-screen flex flex-col md:flex-row justify-around items-center text-center md:text-left'>
      
      {/* テキスト部分 */}
      <div>
        <small className='block w-full font-bold text-center text-sky-600'>
          「これは面白い！を創り ∴ 自由を広げる。」
        </small>
        <h1 className='text-center font-bold py-3 text-5xl text-sky-600'>
          KANOA GROUP Service
        </h1>
        <Link
          href="/contact"
          className='block mx-auto my-4 bg-sky-600 hover:bg-orange-500 rounded-full px-4 py-2 text-white text-center w-fit transition duration-[500ms]'
        >
          お問い合わせ
        </Link>
      </div>

      {/* 画像部分 */}
      <div className='mt-6 md:mt-0'>
        <Image
          className='w-full'
          src="/kanoa-logo.PNG"
          alt="Kanoa Logo"
          width={200}
          height={100}
        />
      </div>

    </div>
  )
}
