"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function SNSImpactSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);

  return (
    <section className="relative w-full h-auto py-30 md:h-[100vh] flex flex-col items-center justify-center bg-white overflow-hidden px-10 md:px-4">

      <div className="absolute py-3 inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />

      {/* インパクト文字 */}
      <motion.h1
        ref={ref}
        style={{ scale, opacity }}
        className="text-black font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-tight"
      >
        毎日知識配信中
      </motion.h1>

      <p className="mt-6 text-gray-500 text-sm sm:text-base md:text-lg text-center max-w-2xl leading-relaxed">
        ビジネス・IT・スキル習得に関する情報を<br className="sm:hidden" />
        毎日発信しています。
      </p>

      {/* SNSカード */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">

        {/* GK-U */}
        <Link
          href="https://www.instagram.com/gku_group?igsh=eWJpNXdncWd2aG00&utm_source=qr"
          target="_blank"
          className="group border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition duration-500 bg-white"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12">
              <Image
                src="/gku.png"
                alt="GK-Uロゴ"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-xs text-gray-400 tracking-widest">
                INSTAGRAM
              </div>
              <div className="text-lg font-semibold text-gray-900">
                @gku_group
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
          【国内向け】 IT教育・起業・副業・マネタイズ戦略を発信
          </p>
        </Link>

        {/* KANOA */}
        <Link
          href="https://www.instagram.com/kanoa__group?igsh=MWVzYzlnN2g3aG43dg%3D%3D&utm_source=qr"
          target="_blank"
          className="group border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition duration-500 bg-white"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12">
              <Image
                src="/kanoa-logo.PNG"
                alt="KANOAロゴ"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-xs text-gray-400 tracking-widest">
                INSTAGRAM
              </div>
              <div className="text-lg font-semibold text-gray-900">
                @kanoa__group
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
          【海外向け】 デザインの実績データを発信
          </p>
        </Link>

      </div>
      {/* SNSカード */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* GK-U */}
        <Link
          href="/"
          target="_blank"
          className="group border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition duration-500 bg-white"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12">
              <Image
                src="/gku.png"
                alt="GK-Uロゴ"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-xs text-gray-400 tracking-widest">
                TikTok
              </div>
              <div className="text-lg font-semibold text-gray-900">
                @kanoa__group
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
            【海外向け】 IT教育・起業・副業・マネタイズ戦略を発信
          </p>
        </Link>
        {/* MAKOTO */}
        <Link
          href="/"
          target="_blank"
          className="group border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition duration-500 bg-white"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12">
              　M
            </div>
            <div>
              <div className="text-xs text-gray-400 tracking-widest">
                TikTok
              </div>
              <div className="text-lg font-semibold text-gray-900">
                @makoto_kanoa
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
            「朝は社長｜夜は探求家」
          </p>
        </Link>



      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="
          relative z-20
          rounded-full px-10 py-5 text-lg font-semibold text-white
          bg-gradient-to-r from-sky-600 to-sky-500
          shadow-lg shadow-sky-400/50
          transform transition duration-500 hover:scale-105 hover:shadow-2xl
        "
      >
        質問はこちら
      </Link>

    </section>
  );
}