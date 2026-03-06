"use client"

import Link from "next/link"

export default function FixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">

      <div className="bg-gradient-to-b from-sky-100 via-sky-200 to-sky-200 text-black shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">

          {/* テキスト */}
          <div className="text-sm md:text-base text-center md:text-left leading-snug">
            これが、2軸で構成された KANOA GROUP が推す 1 軸 <br className="md:hidden"></br>
            <br className="md:hidden"></br>
            <span className="font-semibold m-2 bg-white px-2 py-1 rounded-md">Cloud Pocket</span>
          </div>

          {/* ボタン */}
          <div className="flex gap-3 mt-2 md:mt-0 justify-center md:justify-end w-full md:w-auto">
            <Link
              href="https://page.line.me/527qtybu?oat_content=url&openQrModal=true"
              className="backdrop-blur-md bg-green-500 hover:bg-green-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-2xl font-semibold text-sm md:text-lg shadow-2xl hover:scale-105 transition border border-white/40 inline-block text-center w-full md:w-auto"
            >
              LINE登録
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}