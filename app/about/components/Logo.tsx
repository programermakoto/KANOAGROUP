"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Logo() {
  const [lang, setLang] = useState<'ja' | 'en'>('en');

  const content = {
    en: {
      mainTitle: "The origin of the KANOA GROUP name and logo",
      mainSub: "The origin of the KANOA GROUP name and logo",
      sections: [
        {
          title: "Meaning behind the name 'KANOA'",
          body: `KANOA means "freedom" in Hawaiian. It embodies the wish for everyone involved to live freely in both material and spiritual aspects. Each employee, customer, partner, and teammate is empowered to challenge and create freely — this is the foundation of KANOA GROUP.`
        },
        {
          title: "Meaning behind 'GROUP'",
          body: `KANOA GROUP continues to challenge various fields leveraging IT as a foundation. The term "GROUP" represents a collective that creates value together, beyond what an individual can achieve.`
        },
        {
          title: "Meaning behind the logo",
          body: `The blue "K" at the center symbolizes KANOA GROUP. Its triangular shape with three vertices represents the core businesses supporting the group.`,
          list: [
            "🔴 Red — Passion: Energy and enthusiasm for continuous challenge",
            "🟠 Orange — Creativity: Flexible ideas and freedom of thought",
            "🟢 Green — Growth: Creating a cycle where people, business, and society grow together",
          ],
          footer: `These colors form a circle, symbolizing the cycle of "creation," "challenge," and "growth," representing an infinite "circle of freedom."`
        }
      ]
    },
    ja: {
      mainTitle: "KANOA GROUP 名称とロゴの由来",
      mainSub: "The origin of the KANOA GROUP name and logo",
      sections: [
        {
          title: "名称「KANOA」に込めた想い",
          body: `KANOA（カノア）はハワイ語で「自由」を意味します。「関わるすべての人が、物心両面で自由に生きられる社会をつくる」という願いが込められています。社員一人ひとり、お客様・パートナー・仲間たちが自分らしく自由に挑戦し、創造できる世界。それがKANOA GROUPの原点です。`
        },
        {
          title: "GROUP に込めた想い",
          body: `KANOA GROUPは、IT事業を基盤にしつつ、テクノロジーを活かして幅広い分野に挑戦し続けます。多様なメンバーとチームを組み、一人では生み出せない価値を創造する「集合体」としての姿勢を示すために、「GROUP」という言葉を冠しました。`
        },
        {
          title: "ロゴに込めた意味",
          body: `ロゴ中央の青い「K」は、KANOA GROUPを象徴。三角を基調とし、3つの頂点はグループを支える基盤事業を表します。`,
          list: [
            "🔴 赤 ― 「情熱」：挑戦し続けるエネルギーと熱意",
            "🟠 オレンジ ― 「創造」：柔軟な発想と自由なアイデア",
            "🟢 緑 ― 「成長」：人・事業・社会が共に育つ循環",
          ],
          footer: `これらの色が円を描くことで、「創造」「挑戦」「成長」が循環し、無限に広がる“自由の輪”を象徴しています。`
        }
      ]
    }
  }

  return (
    <section id="value" className="pt-20 container mx-auto space-y-12 text-gray-700">
      
      {/* 言語切替 */}
      <div className="flex justify-end gap-2 mb-6">
        <button
          onClick={() => setLang('ja')}
          className={`px-3 py-1 rounded-full border ${lang === 'ja' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border-gray-300'} transition`}
        >
          日本語
        </button>
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1 rounded-full border ${lang === 'en' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border-gray-300'} transition`}
        >
          English
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-gray-900 pb-2">{content[lang].mainTitle}</h1>
          <small className="block text-sm text-gray-500">{content[lang].mainSub}</small>

          {content[lang].sections.map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start gap-8 md:gap-12"
            >
              {/* テキスト */}
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="leading-relaxed whitespace-pre-line">{section.body}</p>

                {section.list && (
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 list-disc list-inside text-gray-600">
                    {section.list.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}

                {section.footer && <p className="mt-3 text-gray-600">{section.footer}</p>}
              </div>

              {/* 画像 */}
              {section.list && (
                <div className="md:w-[20%] flex justify-center md:justify-end items-start">
                  <Image
                    src="/kanoa-logo.PNG"
                    alt="KANOA GROUP Logo"
                    width={280}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}