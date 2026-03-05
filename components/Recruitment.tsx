"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function RecruitmentImpactScroll() {
  const ref = useRef(null);

  // スクロール量に応じて文字を大きくする
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.2]); // スマホでも大きすぎないよう調整

  return (
    <section className="relative w-full h-[50vh] md:min-h-[100vh] flex flex-col items-center justify-start overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/kanoa-home.png"
          alt="KANOA背景"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div> {/* 少し暗めのオーバーレイ */}
      </div>

      {/* 上余白 */}
      <div className="pt-[15vh] sm:pt-[20vh] md:pt-[25vh]"></div>

      {/* インパクト文字 */}
      <motion.h1
        ref={ref}
        style={{ scale }}
        className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-tight z-10 px-4 sm:px-6"
      >
        お前はどうしたい！
      </motion.h1>

      {/* サブテキスト */}
      <p className="text-white pt-8 sm:pt-12 text-sm sm:text-base md:text-lg lg:text-xl mt-4 max-w-3xl text-center z-10 px-4 sm:px-6 leading-relaxed">
        KANOA GROUPなら裁量権を持って<br className="sm:hidden" />
        自由に挑戦可能。<br /><br className="sm:hidden" />
        いつまでやりたいことを我慢して<br className="sm:hidden" />
        何年経ってる？そんな時間はもう終わりだ！
      </p>

      {/* CTAボタン */}
      <Link
        href="/recruitment"
        className="
          relative z-20 mt-8 sm:mt-12 rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500
            hover:from-orange-500 hover:to-red-500 transition duration-500 font-medium shadow-lg
        "
      >
        人生が変わるボタン
      </Link>

      {/* 下余白 */}
      <div className="pb-[15vh] sm:pb-[20vh] md:pb-[25vh]"></div>
    </section>
  );
}