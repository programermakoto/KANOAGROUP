import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopWrapper() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* テキストエリア */}
        <div className="w-full md:w-1/2">
          <h1 className="flex items-baseline text-center md:text-left gap-2">
            <span className="inline-block text-5xl md:text-[84px] font-extrabold leading-none text-sky-600">3</span>
            <span className="text-3xl md:text-5xl font-bold text-sky-600">min</span>
            <span className="text-3xl md:text-5xl font-bold text-orange-500">HP</span>
            <span className="text-3xl md:text-5xl font-bold text-sky-600">-CREATE</span>
          </h1>

          <hr className="my-4 border-t-2 border-sky-100 w-24 md:w-40" />

          <p className="text-sm md:text-base text-sky-700 leading-relaxed">
            あなたのサイトを「スピード」「集客」「希少性」「デザイン力」「わかりやすさ」を武器に、たった
            <span className="font-semibold text-sky-600 mx-1">3分</span>のヒアリングで作成します。
          </p>

          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center md:items-start gap-3">
            <Link
              href="tel:050-8887-2035"
              aria-label="無料相談に電話する"
              className="inline-block w-full sm:w-auto text-center px-6 py-3 rounded-full text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 transition"
            >
              無料相談（電話）
            </Link>

            <Link
              href="/contact"
              aria-label="無料相談フォームへ"
              className="inline-block w-full sm:w-auto text-center px-6 py-3 rounded-full text-sm font-medium border border-sky-600 text-sky-600 bg-white hover:bg-sky-50 transition"
            >
              フォームで相談
            </Link>
          </div>
        </div>

        {/* 画像エリア */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
            <Image
              src="/model-3.webp"
              alt="HP-CREATE イメージ"
              width={840}
              height={840}
              className="object-cover w-full h-full"
              priority={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
