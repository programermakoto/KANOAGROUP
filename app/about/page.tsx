"use client";

import ForContact from '@/components/ui/forContact'
import React from 'react'
import President from './components/President';
import Logo from './components/Logo';
import CompanyProfile from './components/CompanyProfile';
import Philosophy from './components/Philosophy';
import Access from './components/Access';
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
 
      </article>
      {/* ロゴ由来 */}
      <Logo />
      <Mission />
      <ForContact />
    </div >
  );
}