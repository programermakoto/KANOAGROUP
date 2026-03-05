"use client"

import { useEffect, useRef } from "react"
import CLOUDS from "vanta/dist/vanta.clouds.min"
import * as THREE from "three"

import Image from "next/image"
import FixedCTA from "./components/FixedCTA"
import PhoneDemo from "./components/PhoneDemo"
import Link from "next/link"
import Wrapper from "./components/Wrapper"
import dynamic from "next/dynamic";

const VantaClouds = dynamic(
  () => import("vanta/dist/vanta.clouds.min"),
  { ssr: false }
);
export default function AgencyPage() {

    const vantaRef = useRef(null)
    const vantaEffect = useRef(null)
    useEffect(() => {
        if (!vantaEffect.current && vantaRef.current) {
          import("vanta/dist/vanta.clouds.min").then((module) => {
            vantaEffect.current = module.default({
              el: vantaRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200,
              minWidth: 200,
              backgroundColor: 0x68b8d7, // 先にグラデーションで背景表示しておくと体感速くなる
              cloudColor: 0xffffff,
              cloudShadowColor: 0xd9e6f2,
              speed: 0.3, // 軽量化
            });
          });
        }
        return () => {
          if (vantaEffect.current) vantaEffect.current.destroy();
        };
      }, []);

    return (
        <main className="w-full">

            {/* HERO */}
            <section
                ref={vantaRef}
                className="relative h-screen overflow-hidden flex items-center justify-center px-6"
            >

                {/* 背景オーバーレイ（コントラスト調整） */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/30" />


                {/* 中央メイン */}
                <div className="relative z-10 flex flex-col items-center text-center -translate-y-12 md:-translate-y-16">

                    {/* タイトル */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                        Cloud Pocket
                    </h1>

                    {/* サブコピー */}
                    <p className="text-white/90 text-sm md:text-base mb-8 tracking-wide">
                        手軽に始めるクラウドワーク
                    </p>
                    {/* CTA */}

                    <Link
                        href="/contact"
                        className="backdrop-blur-md bg-white/80 hover:bg-white text-black px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:scale-105 transition border border-white/40 inline-block">新規登録</Link>

                </div>


                {/* 右：縦説明 */}
                {/* 縦説明 */}
                <div
                    className="
  absolute
  top-16 left-1/2 -translate-x-1/2
  text-white/90
  text-center

  md:left-auto
  md:right-10
  md:top-1/3
  md:-translate-y-1/2
  md:translate-x-0
  md:text-left
"
                >

                    <p
                        className="text-sm tracking-[0.28em]"
                        style={{
                            writingMode: "vertical-rl",
                            textOrientation: "upright",
                            lineHeight: "2.3"
                        }}
                    >
                        好きな場所、好きな時。<br />
                        スキマ時間で、スマホで仕事。
                    </p>

                </div>

            </section>


            <section className="py-24 bg-white">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Cloud Pocket の特徴
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12">

                        {/* BOX1 */}
                        <div className="text-center bg-gradient-to-b from-sky-100 via-sky-200 to-sky-200 p-8 rounded-2xl ">

                            <div className="text-4xl mb-4">☁️</div>

                            <h3 className="font-bold text-xl mb-3">
                                クラウドで完結
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                通勤時間やカフェ時間、寝る前など。<br></br>
                                スキマ時間を収益に変える<br></br>タスクが多数あります。
                            </p>

                            <p className="text-gray-500 text-sm mb-5">
                                主婦・会社員・ノマドワーカーなど
                                誰でもできる簡単な仕事です。
                            </p>



                        </div>


                        {/* BOX2 */}
                        <div className="text-center bg-gradient-to-b from-sky-100 via-sky-200 to-sky-200 p-8 rounded-2xl ">

                            <div className="text-4xl mb-4">📱</div>

                            <h3 className="font-bold text-xl mb-3">
                                安定できる
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                継続して取り組める仕事が多数。<br></br>
                                安定して収入を得ることも可能です。
                            </p>

                            <p className="text-gray-500 text-sm mb-5">
                                副業にも、本業にも。
                            </p>



                        </div>


                        {/* BOX3 */}
                        <div className="text-center bg-gradient-to-b from-sky-100 via-sky-200 to-sky-200 p-8 rounded-2xl ">

                            <div className="text-4xl mb-4">💰</div>

                            <h3 className="font-bold text-xl mb-3">
                                誰でもできる
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                面倒な審査・スキル・PCは不要。
                            </p>

                            <p className="text-gray-500 text-sm mb-5">
                                月末締め、翌月15日に
                                登録口座へ報酬が振り込まれます。
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            <PhoneDemo />


            {/* ================= STEP ================= */}

            <section className="py-24 max-w-6xl mx-auto px-4">

                <h2 className="text-3xl font-bold text-center mb-16">
                    登録はたった3ステップ
                </h2>

                <div className="grid md:grid-cols-3 gap-10 text-center">

                    <div>
                        <div className="text-5xl font-bold text-blue-600 mb-4">
                            1
                        </div>
                        <h3 className="font-bold mb-2">無料登録</h3>
                        <p className="text-gray-600 text-sm">
                            公式ライン追加
                        </p>
                    </div>

                    <div>
                        <div className="text-5xl font-bold text-blue-600 mb-4">
                            2
                        </div>
                        <h3 className="font-bold mb-2">タスク選択</h3>
                        <p className="text-gray-600 text-sm">
                            好きな仕事を選択
                        </p>
                    </div>

                    <div>
                        <div className="text-5xl font-bold text-blue-600 mb-4">
                            3
                        </div>
                        <h3 className="font-bold mb-2">報酬GET</h3>
                        <p className="text-gray-600 text-sm">
                            翌月15日振込
                        </p>
                    </div>

                </div>

            </section>

            {/* ================= FAQ ================= */}

            <section className="py-24 bg-gradient-to-b from-sky-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        登録者の声
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12 items-start">
                        {/* CARD 1 */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition-transform">
                            <div className="flex items-center mb-4">
                            <div
                                    className="flex justify-center items-center w-12 h-12 rounded-full mr-4"
                                >👤</div>
                                <div>
                                    <p className="font-semibold text-gray-900">山本さん</p>
                                    <p className="text-xs text-gray-500">個人事業主・20代</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                自分のペースで仕事ができ<br></br>
                                初月は収入20万でしたが本気になり2倍伸びました!<br></br>
                                質の高い案件で将来的に法人化も目指してます。
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition-transform">
                            <div className="flex items-center mb-4">
                            <div
                                    className="flex justify-center items-center w-12 h-12 rounded-full mr-4"
                                >👤</div>
                                <div>
                                    <p className="font-semibold text-gray-900">角谷さん</p>
                                    <p className="text-xs text-gray-500">会社員・20代</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                スマホだけでできるタスクが多く、
                                通勤時間や家事の合間にサクッと作業できるので助かっています。
                                毎月安定して収入が入るのが嬉しいです。
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition-transform">
                            <div className="flex items-center mb-4">
                                <div
                                    className="flex justify-center items-center w-12 h-12 rounded-full mr-4"
                                >👤</div>
                                <div>
                                    <p className="font-semibold text-gray-900">松本さん</p>
                                    <p className="text-xs text-gray-500">ノマド・30代</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                無料で登録でき、見返りを求められることもなく。ほんとに利益しかない。<br></br>
                                一番気に入ってる案件が食事を食べに行きレビューする案件！食費代浮きました笑
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= Wrapper ================= */}

            <Wrapper />

            {/* ================= CTA ================= */}



            <FixedCTA />

        </main>
    )
}