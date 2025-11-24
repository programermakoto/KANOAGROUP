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
        <div className="grid md:grid-cols-3 gap-8 text-center my-10 md:text-left">
          {/* 自由 */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <span className="text-4xl font-extrabold text-sky-600">自由</span>
            <p className="text-gray-700 leading-relaxed">
              自分らしく挑戦できる環境をつくる
            </p>
          </div>

          {/* 創造 */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <span className="text-4xl font-extrabold text-orange-500">創造</span>
            <p className="text-gray-700 leading-relaxed">
              新しい価値を生み出す挑戦を続ける
            </p>
          </div>

          {/* 成長 */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <span className="text-4xl font-extrabold text-green-500">成長</span>
            <p className="text-gray-700 leading-relaxed">
              個人・チーム・社会が共に育つ循環をつくる
            </p>
          </div>
        </div>
      </article>
      {/* ロゴ由来 */}
      <Logo />
      <Mission />
      <ForContact />
    </div >
  );
}