import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <section aria-labelledby="company-info" className="container w-full py-12">
    <h2 id="company-info" className="text-3xl my-6">
      KANOA GROUP 企業情報
    </h2>

    <div className="space-y-12">
      <article aria-labelledby="vision" className="prose prose-lg max-w-4xl mx-auto text-gray-700">
        <h3 id="vision" className="text-2xl text-center">
          KANOAGROUP ビジョンについて
        </h3>
        <p className="text-center font-medium">Vision</p>
        <p className="text-center">
          KANOA GROUPは、常にワクワクと自由の中心で、
          <br />
          「これは面白い！を創り ∴ 自由を広げる。」を体現し続けます。創造と挑戦を通して、誰もが自由に生きられる社会をつくる
        </p>
        <div className="text-center mt-4">
          <Link href="/about/#vision">ビジョン詳細を見る</Link>
        </div>
      </article>

      <article className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="w-40 h-40 relative rounded-full overflow-hidden bg-gray-100">
            <Image src="/kanoa-logo.png" alt="KANOA GROUP ロゴ" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <h3 className="text-2xl text-center">KANOA GROUP 会社概要について</h3>
          <p className="text-center text-sm text-gray-600 mb-4">About</p>
          <div className="text-center">
            <Link href="/about">会社概要を見る</Link>
          </div>
        </div>
      </article>

      <article className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="w-40 h-40 relative rounded overflow-hidden bg-gray-100">
            <Image src="/makoto.webp" alt="寺内誠将（代表）" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <h3 className="text-2xl text-center">寺内誠将 — KANOA GROUP 代表挨拶</h3>
          <p className="text-center text-sm text-gray-600 mb-4">Message</p>
          <div className="text-center">
            <Link href="/about#message">代表挨拶を見る</Link>
          </div>
        </div>
      </article>
    </div>
  </section>
  )
}
