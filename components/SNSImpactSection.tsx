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
    <section className="relative w-full h-auto py-30 md:h-[100vh] flex flex-col items-center justify-center overflow-hidden px-10 md:px-4">

      <Image
        src="/cta-bg.png"
        alt=""
        fill
        className="absolute inset-0 object-cover -z-20"
      />
      <div className="absolute inset-0 bg-black/55 -z-10" />

      {/* インパクト文字 */}
      <motion.h1
        ref={ref}
        style={{ scale, opacity }}
        className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-tight drop-shadow-md"
      >
        毎日知識配信中
      </motion.h1>

      <p className="mt-6 text-gray-100 text-sm sm:text-base md:text-lg text-center max-w-2xl leading-relaxed drop-shadow">
        ビジネス・IT・スキル習得に関する情報を<br className="sm:hidden" />
        毎日発信しています。
      </p>

      {/* SNSカード */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">

        {/* GK-U */}
        <Link
          href="https://www.instagram.com/gku_group?igsh=eWJpNXdncWd2aG00&utm_source=qr"
          target="_blank"
          className="group border border-white/30 rounded-2xl p-6 hover:shadow-xl transition duration-500 bg-white/90 backdrop-blur-sm"
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
            IT教育・起業・副業・マネタイズ戦略を発信しています
          </p>
        </Link>

        {/* KANOA */}
        <Link
          href="https://www.instagram.com/kanoa__group?igsh=MWVzYzlnN2g3aG43dg%3D%3D&utm_source=qr"
          target="_blank"
          className="group border border-white/30 rounded-2xl p-6 hover:shadow-xl transition duration-500 bg-white/90 backdrop-blur-sm"
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
            デザインの実績データを発信しています
          </p>
        </Link>

      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="relative z-20 rounded-full px-8 py-3.5 text-sm sm:text-base md:text-lg font-semibold text-white whitespace-nowrap bg-gradient-to-r from-sky-600 to-sky-500 shadow-lg shadow-sky-400/50 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        お問い合わせはこちらから
      </Link>

    </section>
  );
}