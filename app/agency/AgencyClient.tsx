"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

import Link from "next/link"

import FixedCTA from "./components/FixedCTA"
import PhoneDemo from "./components/PhoneDemo"
import Wrapper from "./components/Wrapper"

export default function AgencyClient() {
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

        <div className="absolute top-10 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:top-1/3 md:-translate-y-1/3 md:translate-x-0 text-white/90">
          <p className="text-xs md:text-sm leading-loose tracking-[0.2em] text-center md:text-left [writing-mode:vertical-rl] [text-orientation:upright]">
            好きな場所、
            <br className="md:hidden"/>
            好きな時。
            <br className="md:hidden"/>
            <br/>
            スキマ時間で、
            <br className="md:hidden"/>
            スマホで仕事。
            <br className="md:hidden"/>
          </p>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Cloud Pocket の特徴
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: "☁️", title: "クラウドで完結", desc: "スキマ時間を収益に変えるタスクが多数あります。" },
              { icon: "📱", title: "安定できる", desc: "継続して取り組める仕事が多数あります。" },
              { icon: "💰", title: "誰でもできる", desc: "面倒な審査・スキル・PCは不要。" },
            ].map((box, i) => (
              <div key={i} className="text-center bg-gradient-to-b from-sky-100 via-sky-200 to-sky-200 p-8 rounded-2xl">
                <div className="text-4xl mb-4">{box.icon}</div>
                <h3 className="font-bold text-xl mb-3">{box.title}</h3>
                <p className="text-gray-600 text-sm">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhoneDemo />

      <Wrapper />
      <FixedCTA />

    </main>
  )
}