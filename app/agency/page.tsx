// app/agency/page.tsx
"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

import Image from "next/image"
import Link from "next/link"

import FixedCTA from "./components/FixedCTA"
import PhoneDemo from "./components/PhoneDemo"
import Wrapper from "./components/Wrapper"

export default function AgencyPage() {
  const vantaRef = useRef<HTMLDivElement | null>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    let CLOUDS: any
    import("vanta/dist/vanta.clouds.min").then((module) => {
      CLOUDS = module.default
      if (vantaRef.current) {
        vantaEffect.current = CLOUDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          backgroundColor: 0x68b8d7,
          cloudColor: 0xffffff,
          cloudShadowColor: 0xd9e6f2,
          speed: 0.3,
        })
      }
    })

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy()
    }
  }, [])

  return (
    <main className="w-full">
      {/* HERO */}
      <section
        ref={vantaRef}
        className="relative h-screen overflow-hidden flex items-center justify-center px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/30" />

        <div className="relative z-10 flex flex-col items-center text-center -translate-y-12 md:-translate-y-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
            Cloud Pocket
          </h1>
          <p className="text-white/90 text-sm md:text-base mb-8 tracking-wide">
            手軽に始めるクラウドワーク
          </p>
          <Link
            href="/contact"
            className="backdrop-blur-md bg-white/80 hover:bg-white text-black px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:scale-105 transition border border-white/40 inline-block"
          >
            新規登録
          </Link>
        </div>

        <div
          className="absolute top-16 left-1/2 -translate-x-1/2 text-white/90 text-center
                     md:left-auto md:right-10 md:top-1/3 md:-translate-y-1/2 md:translate-x-0 md:text-left"
        >
          <p
            className="text-sm tracking-[0.28em] md:writing-vertical"
          >
            好きな場所、<br className="md:hidden"></br>好きな時。<br />
            スキマ時間で、<br className="md:hidden"></br>
            スマホで仕事。
          </p>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Cloud Pocket の特徴
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: "☁️", title: "クラウドで完結", desc: "通勤時間やカフェ時間、寝る前など。スキマ時間を収益に変えるタスクが多数あります。", sub: "主婦・会社員・ノマドワーカーなど誰でもできる簡単な仕事です。" },
              { icon: "📱", title: "安定できる", desc: "継続して取り組める仕事が多数。安定して収入を得ることも可能です。", sub: "副業にも、本業にも。" },
              { icon: "💰", title: "誰でもできる", desc: "面倒な審査・スキル・PCは不要。", sub: "月末締め、翌月15日に登録口座へ報酬が振り込まれます。" },
            ].map((box, i) => (
              <div key={i} className="text-center bg-gradient-to-b from-sky-100 via-sky-200 to-sky-200 p-8 rounded-2xl">
                <div className="text-4xl mb-4">{box.icon}</div>
                <h3 className="font-bold text-xl mb-3">{box.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{box.desc}</p>
                <p className="text-gray-500 text-sm mb-5">{box.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PhoneDemo */}
      <PhoneDemo />

      {/* 登録ステップ */}
      <section className="py-24 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-16">登録はたった3ステップ</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { num: "1", title: "無料登録", desc: "公式ライン追加" },
            { num: "2", title: "タスク選択", desc: "好きな仕事を選択" },
            { num: "3", title: "報酬GET", desc: "翌月15日振込" },
          ].map((step, i) => (
            <div key={i}>
              <div className="text-5xl font-bold text-blue-600 mb-4">{step.num}</div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 登録者の声 */}
      <section className="py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">登録者の声</h2>
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {[
              { name: "山本さん", role: "個人事業主・20代", msg: "自分のペースで仕事ができ\n初月は収入20万でしたが本気になり2倍伸びました!\n質の高い案件で将来的に法人化も目指してます。" },
              { name: "角谷さん", role: "会社員・20代", msg: "スマホだけでできるタスクが多く、通勤時間や家事の合間にサクッと作業できるので助かっています。毎月安定して収入が入るのが嬉しいです。" },
              { name: "松本さん", role: "ノマド・30代", msg: "無料で登録でき、見返りを求められることもなく。ほんとに利益しかない。\n一番気に入ってる案件が食事を食べに行きレビューする案件！食費代浮きました笑" },
            ].map((user, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition-transform">
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full mr-4">👤</div>
                  <div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm whitespace-pre-line">{user.msg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wrapper と FixedCTA */}
      <Wrapper />
      <FixedCTA />
    </main>
  )
}