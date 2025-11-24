import Image from 'next/image'
import React from 'react'

export default function President() {
  return (
    <section id='message' className="pt-[10%] relative h-auto md:h-screen w-full flex items-center justify-center bg-white text-gray-700">
      <article className="container space-y-8">
        <h2 className="w-full md:w-[50%] text-2xl md:text-4xl font-bold border-b-2 border-black">寺内 誠将 グループ代表挨拶</h2>
        <small className="block w-full md:w-[50%] text-sm ">Greetings from Group Representative Makoto Terauchi</small>

        {/* レイアウトをスマホで縦並び、PCでは横並びにする */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-around gap-6">

          {/* テキスト部分（スマホは幅100%、PCは2/3） */}
          <p className="leading-loose w-full md:w-2/3 p-5">
            私たちKANOA GROUPにとって最も大切なのは、「人とテクノロジーの可能性を最大化し、自由な社会を創造すること」です。
            この“自由”とは、単に時間や場所の制約からの解放ではなく、自らの意志とスキルで未来を切り拓く“精神的自由”を意味します。
            <br /><br />
            私は高校時代、アルバイトを通して時間を切り売りする働き方の限界を痛感しました。
            自由も成長も得られない現実の中で、自らのスキルで価値を生み出し、成果とスピードで評価される生き方を選びました。
            <br /><br />
            動画編集を入口にITを学び、大学在学中には企業案件を通じてWeb制作・システム開発・マーケティングなど多くの実務を経験。
            その後、ECサイト構築、アプリ開発、イベント運営、スクール教育など幅広い事業に携わり、「人とテクノロジーの可能性」を確信するようになりました。
            <br /><br />
            KANOA GROUPの理念は、ITの力で人の可能性を解き放ち、“面白い”を社会に循環させることです。
            テクノロジーは冷たいものではなく、“人を自由にするための道具”。
            私たちはその力を最大限に活かし、働き方・学び・暮らしの在り方を変えていく革新を生み出していきます。
          </p>

          {/* 画像＋署名ブロック（スマホは幅100%で中央寄せ、画像は小さめ） */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-start gap-4 p-5">
            <div className="w-36 h-36 md:w-full md:h-full relative overflow-hidden rounded-full md:rounded-none">
              <Image
                src="/makoto.webp"
                className="opacity-40 object-cover"
                alt="寺内誠将"
                fill={false}
                width={160}
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
      </article>

      {/* 泡アニメーション（そのまま） */}
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
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-600px) scale(1.3);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble linear infinite;
        }
        /* border-b-1 の互換性がない場合のフォールバック */
        @media (min-width: 768px) {
          .border-b-1 { border-bottom: 1px solid rgba(0,0,0,0.1); }
        }
      `}</style>
    </section>
  )
}
