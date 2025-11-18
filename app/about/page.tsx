"use client";

import ForContact from '@/components/ui/forContact'
import React from 'react'
import President from './components/President';
import Logo from './components/Logo';
import CompanyProfile from './components/CompanyProfile';
import Philosophy from './components/Philosophy';
import Access from './components/Access';
import Carousel from './components/Carousel';
import Mission from '@/components/ui/Mission';


export default function about() {

  return (
    <div className='container space-y-40'>
      {/* 理念 */}
      <Philosophy />
      {/* 会社概要 */}
      <CompanyProfile />
      {/* アクセス */}
      <Access />
      {/* 挨拶 */}
      <President />
      {/* バリュー */}
      <article className='my-[20%] space-y-2'>
        <h2 className='text-center text-gray-700 text-2xl'>バリュー</h2>
        <small className='block text-center text-gray-700'>value</small>
        <div className=' flex justify-center items-center' style={{ height: '600px', position: 'relative' }}>

          <Carousel
            baseWidth={400}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </article>
      {/* ロゴ由来 */}
      <Logo />
      <Mission />
      <ForContact />
    </div >
  );
}