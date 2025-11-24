import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='container h-auto my-30 md:my-0 md:h-screen flex flex-col-reverse md:flex-row justify-around items-center text-center md:text-left px-4 sm:px-6'>
      

      {/* テキスト部分 */}
      <div className='w-full md:w-auto mt-6 md:mt-0'>
        <small className='block w-full font-bold text-center text-sky-600 mb-2 md:mb-0'>
          「これは面白い！を創り ∴ 自由を広げる。」
        </small>
        <h1 className='text-center font-bold py-3 text-4xl sm:text-5xl text-sky-600'>
          KANOA GROUP Service
        </h1>
        <Link
          href="/contact"
          className='block mx-auto my-4 bg-sky-600 hover:bg-orange-500 rounded-full px-6 py-3 text-white text-center w-fit transition duration-500'
        >
          お問い合わせ
        </Link>
      </div>

      {/* 画像部分 */}
      <div className='w-full md:w-auto mb-6 md:mb-0 flex justify-center'>
        <Image
          className='w-48 h-auto md:w-full'
          src="/kanoa-logo.PNG"
          alt="Kanoa Logo"
          width={200}
          height={100}
        />
      </div>

    </div>
  )
}
