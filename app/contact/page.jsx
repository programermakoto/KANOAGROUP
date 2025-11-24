"use client";
import React from 'react'
import Reactfook from "./components/reactFook"
import RenderModel from '@/components/RenderModel';
import EarthModel, { WorldModel } from '@/components/models/earth';
export default function Contact() {
  return (
    <>
      {/* <Image
        src={bg}
        alt='background-image'
        className='-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-60'
      /> */}
      <div className="w-full h-screen relative">
        <RenderModel >
          <WorldModel />
        </RenderModel>
        <h1 className="absolute inset-0 flex items-center justify-center px-4 md:px-12 lg:px-24">
          <span className="text-4xl text-center text-gray-700 sm:text-5xl md:text-6xl lg:text-7xl font-bold  opacity-80">
            お問合せ
          </span>
        </h1>
      </div>

      <article className="relative w-full flex  flex-col items-center justify-center space-y-8">
        <div className='my-10 flex flex-col items-center justify-center space-y-6 w-3/4'>
          <h1 className='text-gray-700 font-bold text-center text-xs md:text-4xl capitalize'>平均 28秒 でお問合せ完了。
            <br></br>ちょっとしたご相談から本格的なご依頼まで、お気軽にどうぞ！</h1>
          <p className='text-xs md:text-xl text-center'>
            株式会社KANOA GROUPにご興味をお持ちいただき、誠にありがとうございます。<br></br>
            「まず話だけ聞いてみたい」「こんなことできる？」という軽いご相談でも大歓迎です。<br></br><br></br>
            下記フォームにご記入いただければ、担当者が後日ご連絡いたします。<br></br>
            ※当社の公式LINEをお持ちの方は、担当者にお繋ぎできますのでお気軽にどうぞ!
            <br></br>※返信は24時間365日年中無休ですお返しできます。</p>
        </div>
      </article>

      <article className="relative flex flex-col md:flex-row w-full">
        {/* フォーム（手前に出す） */}
        <div className="relative z-10 w-full md:w-1/2 p-4 md:p-0">
          <Reactfook />
        </div>

        {/* モデル背景（スマホで絶対配置、PCは横並び） */}
        <div className="absolute top-0 left-0 w-full h-full md:relative md:w-1/2 z-0 pointer-events-none">
          <RenderModel>
            <WorldModel />
          </RenderModel>
        </div>
      </article>

    </>
  )
}
