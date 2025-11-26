import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <section id="value" className="pt-20 container mx-auto space-y-8 text-gray-700">

      {/* 大見出し */}
      <h1 className="w-full md:w-[50%] text-2xl md:text-4xl font-bold border-b-2 border-black text-gray-700">
        KANOA GROUP 名称と<br className="sm:hidden"></br>ロゴの由来
      </h1>
      <small className="block w-full md:w-[50%] text-sm">The origin of the KANOA GROUP name and logo</small>

      {/* 名称に込めた想い */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">名称「KANOA」に込めた想い</h2>
        <p className="leading-relaxed w-full md:w-1/2 md:ml-6">
          KANOA（カノア）はハワイ語で「自由」を意味します。「関わるすべての人が、物心両面で自由に生きられる社会をつくる」という願いが込められています。社員一人ひとり、お客様・パートナー・仲間たちが自分らしく自由に挑戦し、創造できる世界。それがKANOA GROUPの原点です。
        </p>
      </div>

      {/* GROUPに込めた想い */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">GROUP に込めた想い</h2>
        <p className="leading-relaxed w-full md:w-1/2 md:ml-6">
          KANOA GROUPは、IT事業を基盤にしつつ、テクノロジーを活かして幅広い分野に挑戦し続けます。多様なメンバーとチームを組み、一人では生み出せない価値を創造する「集合体」としての姿勢を示すために、「GROUP」という言葉を冠しました。
        </p>
      </div>

      {/* ロゴに込めた意味 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">ロゴに込めた意味</h2>

        {/* モバイルでは縦並び、PCでは横並び */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-4"> {/* gap-6 → gap-4 に縮める */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start"> {/* md:w-1/2 → md:w-2/5 に調整 */}
            <Image
              src="/kanoa-logo.PNG"
              alt="KANOAGROUPロゴ画像"
              width={300}
              height={100}
              className="my-4"
            />
          </div>

          <div className="w-full md:w-3/5"> {/* md:w-1/2 → md:w-3/5 に調整 */}
            <p className="leading-relaxed w-full md:w-full">
              ロゴ中央の青い「K」は、KANOA GROUPを象徴。三角を基調とし、3つの頂点はグループを支える基盤事業を表します。
            </p>

            <ul className="mt-4 ml-0 md:ml-6 list-disc list-inside space-y-1">
              <li>🔴 赤 ― 「情熱」：挑戦し続けるエネルギーと熱意</li>
              <li>🟠 オレンジ ― 「創造」：柔軟な発想と自由なアイデア</li>
              <li>🟢 緑 ― 「成長」：人・事業・社会が共に育つ循環</li>
            </ul>

            <p className="mt-3 leading-relaxed w-full md:w-full md:ml-6">
              これらの色が円を描くことで、「創造」「挑戦」「成長」が循環し、無限に広がる“自由の輪”を象徴しています。
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
