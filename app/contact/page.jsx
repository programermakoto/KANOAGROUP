"use client";
import React from 'react'
import RenderModel from '@/components/RenderModel';
import { WorldModel } from '@/components/models/earth';
import ReactFook from './components/ReactFook.jsx';
import { Toaster } from "sonner";
import ToastProvider from './components/ToastProvider.jsx';


export default function Contact() {
  return (
    <>
      <div className="w-full py-20 md:py-32 relative flex items-center justify-center px-4 md:px-12 lg:px-24">
        <h1>
          <span className="text-4xl text-center text-sky-600 sm:text-5xl md:text-6xl lg:text-7xl font-bold opacity-80">
           KANOA GROUPへ<br className="sm:hidden"></br>お問い合わせ
          </span>
        </h1>
      </div>

      <ToastProvider />
      <article className="relative flex flex-col md:flex-row w-full">
        {/* フォーム（手前に出す） */}
        <div className="relative z-10 w-full md:w-1/2 p-4 md:p-0">
          <ReactFook />
        </div>

        {/* モデル背景（スマホで絶対配置、PCは横並び） */}
        <div className="absolute top-0 left-0 w-full h-full md:relative md:w-1/2 md:h-[80vh] z-0 pointer-events-none opacity-30 md:opacity-100">
          <RenderModel>
            <WorldModel />
          </RenderModel>
        </div>
      </article>

    </>
  )
}