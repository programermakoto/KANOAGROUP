import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function About() {
  return (
    <section aria-labelledby="company-info" className="container w-full py-12">
      <h2 id="company-info" className="text-3xl my-6 text-center lg:text-left">
        KANOA GROUP 企業情報
      </h2>

      <div className="space-y-12">
        {/* ビジョン */}
        <article aria-labelledby="vision" className="prose space-y-12 prose-lg max-w-4xl mx-auto text-gray-700 my-50">
          <h3 id="vision" className="text-2xl text-center">
            KANOAGROUP ビジョンについて
          </h3>
          <p className="text-center font-medium">Vision</p>
          <p className="text-center">
            KANOA GROUPは、常にワクワクと自由の中心で、
            <br />
            「これは面白い！を創り ∴ 自由を広げる。」を体現し続けます。
            創造と挑戦を通して、誰もが自由に生きられる社会をつくる
          </p>
          <div className="text-center mt-4">
            <Button>
              <Link href="/about/#vision">ビジョン詳細を見る</Link>
            </Button>
          </div>
        </article>

        {/* 会社概要 */}
        <article className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 px-4 lg:px-0 my-50">
          {/* 画像 */}
          <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
            <div>
              <Image
                src="/kanoa-logo.png"
                alt="KANOA GROUP ロゴ"
                width={100}
                height={100}
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* テキスト */}
          <div className="w-full lg:w-1/2 flex justify-center flex-col gap-3 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-center">KANOA GROUP 会社概要について</h3>
            <p className="text-sm text-gray-600 text-center mb-2">About</p>
            <div>
              <Button className='text-center block mx-auto'>
                <Link href="/about">会社概要を見る</Link>
              </Button>
            </div>
          </div>
        </article>

        {/* 代表挨拶 */}
        <article className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6 lg:gap-12 px-4 lg:px-0 my-50">
          {/* 画像 */}
          <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
            <div>
              <Image
                src="/makoto.webp"
                alt="寺内誠将（代表）"
                width={100}
                height={100}
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* テキスト */}
          <div className="w-full lg:w-1/2 flex justify-center flex-col gap-3 text-center lg:text-left">
            <h3 className="text-2xl text-center font-semibold">寺内誠将 — KANOA GROUP 代表挨拶</h3>
            <p className="text-sm text-center text-gray-600 mb-2">Message</p>
            <div>
              <Button className='text-center block mx-auto'>
                <Link href="/about#message">代表挨拶を見る</Link>
              </Button>
            </div>
          </div>
        </article>





      </div>
    </section>
  )
}
