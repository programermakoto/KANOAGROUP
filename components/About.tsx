"use client";
import { useEffect } from "react";
import { initScrollAnimations } from "@/lib/api";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Attachment from './ui/Attachment'





export default function About() {
  useEffect(() => {
    initScrollAnimations();
  }, []);
  return (
    <section aria-labelledby="company-info" className="container w-full pt-12">
      <div className="text-center mt-10 space-y-1">
        <p className="animate delay text-lg md:text-2xl font-semibold text-gray-700 drop-shadow-md">
          ようこそ。下へ進むとKANOA GROUPの世界が広がります。
        </p>
        <p className="animate text-sm md:text-base text-gray-600 tracking-wide drop-shadow">
          Thanks for visiting. Scroll for more.
        </p>
      </div>
      <div className="flex justify-center my-[50px]">
        <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
      </div>
      <h2 id="company-info" className="animate text-3xl my-6 text-center lg:text-left">
        KANOA GROUP 企業情報
      </h2>

      <Attachment />

      <div className="space-y-12">
        {/* ビジョン */}
        <article aria-labelledby="vision" className="prose  prose-lg max-w-4xl mx-auto text-gray-700 my-50">
          <h3 id="vision" className="animate delay font-bold text-xl md:text-2xl text-center">
            KANOAGROUP ミッション＆ビジョンについて
          </h3>
          <p className="text-center font-medium animate delay">Mission & Vision</p>
          <p className="text-center my-26 animate ">
            KANOA GROUPは、常にワクワクと自由の中心で、
            <h3 className='text-sky-600 my-10 font-bold animate '>「これは面白い！を創り ∴ 自由を広げる。」</h3>
            を体現し続けます。
            創造と挑戦を通して、誰もが自由に生きられる社会をつくる
          </p>
          <div className=' mx-auto mt-4 text-center'>
            <Link className=' mx-auto px-6 py-2 rounded-full text-white bg-sky-600  hover:bg-orange-500 transition duration-[500ms] text-center font-medium' href="/about/#vision">ビジョン詳細を見る</Link>
          </div>
        </article>
        <Attachment />
        {/* 会社概要 */}
        <article className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 px-4 lg:px-0 my-50 ">
          {/* 画像 */}
          <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0 ">
            <div>
              <Image
                src="/kanoa-logo.PNG"
                alt="KANOA GROUP ロゴ"
                width={300}
                height={100}
                className=' animate w-full h-full object-cover '
              />
            </div>
          </div>

          {/* テキスト */}
          <div className="w-full lg:w-1/2 flex justify-center flex-col gap-3 text-center lg:text-left">
            <h3 className="text-xl md:text-2xl text-center animate delay">KANOA GROUP 会社概要について</h3>
            <p className="text-sm text-gray-600 text-center mb-2 animate">About</p>
            <p className="text-sm text-gray-500 text-center mb-4 animate">
              KANOA GROUPのビジョンと挑戦への想いをここでお伝えします。<br />
              Discover the vision and aspirations of KANOA GROUP.
            </p>
            <div className=' mx-auto'>
              <Link className=' mx-auto px-6 py-2 rounded-full text-white bg-sky-600  hover:bg-orange-500 transition duration-[500ms] text-center font-medium' href="/about">会社概要を見る</Link>
            </div>
          </div>
        </article>

        {/* 代表挨拶 */}
        <article className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6 lg:gap-12 px-4 lg:px-0 my-50 ">
          {/* 画像 */}
          <div className=" w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0 ">
            <div>
              <Image
                src="/makoto.webp"
                alt="寺内誠将（代表）"
                width={300}
                height={100}
                className='w-full h-full object-cover animate '
              />
            </div>
          </div>

          {/* テキスト */}
          <div className="w-full lg:w-1/2 flex justify-center flex-col gap-3 text-center lg:text-left">
            <h3 className="text-xl md:text-2xl  text-center animate delay">寺内誠将 - KANOA GROUP 代表挨拶</h3>
            <p className="text-sm text-center text-gray-600 mb-2 animate">Message</p>
            <p className="text-sm text-gray-500 text-center mb-4 animate">
              KANOA GROUPを設立した想いをここでお伝えします。<br />
              Here we would like to share with you the thoughts behind the founding of KANOA GROUP..
            </p>
            <div className=' mx-auto'>
              <Link className=' mx-auto px-6 py-2 rounded-full text-white bg-sky-600  hover:bg-orange-500 transition duration-[500ms] text-center font-medium' href="/about#message">代表挨拶を見る</Link>
            </div>
          </div>
        </article>





      </div>
    </section>
  )
}
