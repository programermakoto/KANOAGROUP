"use client";

import ForContact from '@/components/ForContact'
import React from 'react'
import President from './components/President';
import Logo from './components/Logo';
import CompanyProfile from './components/CompanyProfile';
import Philosophy from './components/Philosophy';
import Access from './components/Access';
import Mission from '@/components/Mission';
import Attachment from '@/components/ui/Attachment';
import Value from './components/Value';


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
      <Value />
      {/* ロゴ由来 */}
      <Logo />
      <Mission />
      <ForContact />
    </div >
  );
}