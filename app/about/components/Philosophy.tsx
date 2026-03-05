"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DiagonalHeroLang() {
  const [lang, setLang] = useState<"ja" | "en">("en");

  const content = {
    en: {
      smallTitle: "CORPORATE MESSAGE",
      mainTitle: "Designing the Future\nwith Strategic Vision",
      body: "We build systems that empower individuals and businesses. Through technology, education, and innovation, we create scalable value for the next generation.",
      button: "Learn More",
    },
    ja: {
      smallTitle: "企業メッセージ",
      mainTitle: "未来をデザインする\n戦略的ビジョンで",
      body: "私たちは、人と企業の可能性を最大化するシステムを構築します。テクノロジー、教育、イノベーションを通じて、次世代にスケーラブルな価値を創造します。",
      button: "詳しく見る",
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      {/* 背景レイヤー */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* 画像側 */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center md:justify-start"
        >
          <div className="relative">
            <div className="absolute inset-0 translate-x-6 translate-y-6 bg-gray-200 rounded-3xl -z-10" />
            <img
              src="/kanoa-home.webp"
              alt="Company Vision"
              className="
                w-[280px] sm:w-[350px] md:w-[420px]
                rounded-3xl
                shadow-2xl
                transform
                -rotate-6
                hover:rotate-0
                transition duration-500
              "
            />
          </div>
        </motion.div>

        {/* テキスト側 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            {/* 言語切替ボタン */}
            <div className="flex justify-end gap-2 mb-4">
              <button
                onClick={() => setLang("ja")}
                className={`px-3 py-1 rounded-full border ${
                  lang === "ja"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900 border-gray-300"
                } transition`}
              >
                日本語
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full border ${
                  lang === "en"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900 border-gray-300"
                } transition`}
              >
                English
              </button>
            </div>

            <h2 className="text-sm tracking-widest text-gray-500 mb-3">
              {content[lang].smallTitle}
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 whitespace-pre-line">
              {content[lang].mainTitle}
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              {content[lang].body}
            </p>

            <button className="px-8 py-3 bg-black text-white rounded-full text-sm tracking-wide hover:bg-gray-800 transition">
              {content[lang].button}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}