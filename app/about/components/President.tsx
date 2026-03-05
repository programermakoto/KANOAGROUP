"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function President() {
  const [lang, setLang] = useState<'ja' | 'en'>('en');

  const content = {
    ja: {
      title: "寺内 誠将 グループ代表挨拶",
      subtitle: "Greetings from Group Representative Makoto Terauchi",
      body: `
私たちKANOA GROUPにとって最も大切なのは、「人とテクノロジーの可能性を最大化し、自由な社会を創造すること」です。
この“自由”とは、単に時間や場所の制約からの解放ではなく、自らの意志とスキルで未来を切り拓く“精神的自由”を意味します。

私は高校時代、アルバイトを通して時間を切り売りする働き方の限界を痛感しました。
自由も成長も得られない現実の中で、自らのスキルで価値を生み出し、成果とスピードで評価される生き方を選びました。

動画編集を入口にITを学び、大学在学中には企業案件を通じてWeb制作・システム開発・マーケティングなど多くの実務を経験。
その後、ECサイト構築、アプリ開発、イベント運営、スクール教育など幅広い事業に携わり、「人とテクノロジーの可能性」を確信するようになりました。

KANOA GROUPの理念は、ITの力で人の可能性を解き放ち、“面白い”を社会に循環させることです。
テクノロジーは冷たいものではなく、“人を自由にするための道具”。
私たちはその力を最大限に活かし、働き方・学び・暮らしの在り方を変えていく革新を生み出していきます。
      `,
    },
    en: {
      title: "Makoto Terauchi - Greetings from Group Representative",
      subtitle: "Greetings from Group Representative Makoto Terauchi",
      body: `
At KANOA GROUP, our core mission is to maximize the potential of people and technology, creating a society of freedom.
This "freedom" does not just mean liberation from time or location constraints, but the "mental freedom" to shape your future with your own will and skills.

During high school, I realized the limitations of working just to sell time through part-time jobs.
In a reality where neither freedom nor growth was possible, I chose to create value through my skills and live a life evaluated by results and speed.

I started learning IT through video editing, and during university I gained extensive practical experience in web development, system development, and marketing through corporate projects.
Later, I engaged in a wide range of businesses including e-commerce, app development, event management, and educational schools, which strengthened my belief in the potential of people and technology.

KANOA GROUP's philosophy is to unleash human potential with the power of IT and circulate "fun" into society.
Technology is not cold; it is a tool to free people.
We harness this power to innovate and transform the way we work, learn, and live.
      `,
    }
  }

  return (
    <section id='message' className="pt-[10%] relative h-auto md:h-screen w-full flex items-center justify-center bg-white text-gray-700 transition-all duration-500">
      <article className="container space-y-8">

        {/* トグルボタン */}
        <div className="flex justify-end gap-3 mb-4">
          <button
            onClick={() => setLang('ja')}
            className={`px-4 py-2 rounded-full border ${lang === 'ja' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border-gray-300'} transition`}
          >
            日本語
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-2 rounded-full border ${lang === 'en' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border-gray-300'} transition`}
          >
            English
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={lang} // 言語切替ごとに新しいmotion.divにする
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="w-full md:w-[50%] text-2xl md:text-4xl font-bold border-b-2 border-black">
              {content[lang].title}
            </h2>
            <small className="block w-full md:w-[50%] text-sm">{content[lang].subtitle}</small>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-around gap-6 mt-4">

              {/* テキスト部分 */}
              <p className="leading-loose w-full md:w-2/3 p-5 whitespace-pre-line">
                {content[lang].body}
              </p>

              {/* 画像＋署名 */}
              <div className="w-full md:w-1/3 flex flex-col items-center justify-start gap-4 p-5">
                <div className="w-36 h-36 md:w-full md:h-full relative overflow-hidden">
                  <Image
                    src="/makoto.webp"
                    className="opacity-40 object-cover"
                    alt="寺内誠将"
                    fill={false}
                    width={400}
                    height={160}
                  />
                </div>

                <div className='w-full flex flex-col items-center md:items-center my-4 pb-3 border-b-0 md:border-b-1'>
                  <div className="flex items-center gap-3">
                    <Image src="/kanoa-logo.PNG" className="object-cover" alt="かのあロゴ" width={60} height={60} />
                  </div>
                  <h2 className="text-center text-2xl mt-4 text-gray-800">
                    <small className="block text-sm">代表取締役</small>
                    寺内 誠将
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </article>

      {/* 泡アニメーション */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="bubble absolute bottom-[-100px] rounded-full animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 5}s`,
              width: `${10 + Math.random() * 25}px`,
              height: `${10 + Math.random() * 25}px`,
              backgroundColor: `rgba(173, 216, 230, ${0.2 + Math.random() * 0.3})`,
              boxShadow: `0 0 10px rgba(173, 216, 230, 0.3)`,
            }}
          ></span>
        ))}
      </div>

      <style jsx>{`
        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { opacity: 1; }
          100% { transform: translateY(-600px) scale(1.3); opacity: 0; }
        }
        .animate-bubble { animation: bubble linear infinite; }
        @media (min-width: 768px) { .border-b-1 { border-bottom: 1px solid rgba(0,0,0,0.1); } }
      `}</style>
    </section>
  )
}