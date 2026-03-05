import Link from 'next/link';
import React from 'react';

export default function ForContact() {
  return (
    <div className="relative container my-20 md:my-30 h-auto md:h-[60vh] w-full md:w-4/5 mx-auto flex justify-center items-center perspective-1000">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 w-full">

        {/* テキスト部分 */}
        <div className="w-full md:w-2/3 text-center md:text-left px-4 z-10">
          <h3 className="text-4xl sm:text-5xl md:text-6xl text-gray-700 mb-6 md:mb-8 tracking-tight">
            あなたの<span className="text-[#FF6600]">アイデア</span><br/>  
            眠らせていませんか？
          </h3>
          <p className="text-xs md:text-xl text-gray-600 mb-4">
            会社でも個人でもOK。<br className="sm:hidden" />
            Webサービス、アプリ、コラボ依頼、取材…<br className="sm:hidden" />
            <span className="text-[#FF6600]">「試しに話してみたい」</span>その気持ち、<br className="sm:hidden" />
            今すぐ形にできます。
          </p>
          <p className="text-xs md:text-lg text-gray-500 italic">
            <span className="font-semibold">※社長や意思決定者が必ず目を通します！</span><br/>
            あなたのアイデアは、形になるチャンスを待っています。
          </p>
        </div>

        {/* ボタン部分 */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end px-4 relative">
          <Link
            href="/contact"
            className="
              relative z-20
              rounded-full px-10 py-5 text-lg font-semibold text-white
              bg-gradient-to-r from-sky-600 to-sky-500
              shadow-lg shadow-sky-400/50
              transform transition duration-500 hover:scale-110 hover:shadow-2xl
              before:absolute before:content-[''] before:inset-0 before:rounded-full before:bg-gradient-to-r before:opacity-50 before:blur-xl before:transition before:duration-700
            "
          >
            アイデアを送る
          </Link>

          {/* 背景装飾の丸 */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-500 rounded-full opacity-40 animate-float-slow"></div>
          <div className="absolute -bottom-8 right-0 w-16 h-16 bg-red-600 rounded-full opacity-30 animate-float-slower"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-600 rounded-full opacity-30 animate-float-fast"></div>
          <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-sky-600 rounded-full opacity-20 animate-float-fast"></div>
        </div>

      </div>
    </div>
  );
}