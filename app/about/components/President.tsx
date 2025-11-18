import Image from 'next/image'
import React from 'react'

export default function President() {
  return (
    <section id='message' className="pt-[10%] relative  h-screen w-full flex items-center justify-center bg-white text-gray-700">
      <article className="container space-y-8">
        <h2 className="w-[50%] text-4xl font-bold border-b-2 border-black">寺内 誠将 グループ代表挨拶</h2>
        <small className="block w-[50%] text-sm ">Greetings from Group Representative Makoto Terauchi</small>
        <div className="flex items-center justify-around ">
          <p className="leading-loose w-2/3 p-5">
            私たちKANOA GROUPにとって最も大切なのは、「人とテクノロジーの可能性を最大化し、自由な社会を創造すること」です。
            この“自由”とは、単に時間や場所の制約からの解放ではなく、自らの意志とスキルで未来を切り拓く“精神的自由”を意味します。
            <br></br><br></br>
            私は高校時代、アルバイトを通して時間を切り売りする働き方の限界を痛感しました。
            自由も成長も得られない現実の中で、自らのスキルで価値を生み出し、成果とスピードで評価される生き方を選びました。
            <br></br><br></br>
            動画編集を入口にITを学び、大学在学中には企業案件を通じてWeb制作・システム開発・マーケティングなど多くの実務を経験。
            その後、ECサイト構築、アプリ開発、イベント運営、スクール教育など幅広い事業に携わり、「人とテクノロジーの可能性」を確信するようになりました。
            <br></br><br></br>
            KANOA GROUPの理念は、ITの力で人の可能性を解き放ち、“面白い”を社会に循環させることです。
            テクノロジーは冷たいものではなく、“人を自由にするための道具”。
            私たちはその力を最大限に活かし、働き方・学び・暮らしの在り方を変えていく革新を生み出していきます。
          </p>

          <div className="w-1/3">
            <Image src="/makoto.webp" className="w-full h-full opacity-40 object-cover " alt="寺内誠将" width={100} height={100} />
            <div className='w-full flex items-center justify-around my-10 pb-3 border-b-1'>
              <Image src="/kanoa-logo.PNG" className="object-cover " alt="かのあロゴ" width={60} height={60} />
              <h2 className="text-center text-2xl  my-4 text-gray-800"><small>代表取締役</small> 寺内 誠将</h2>
            </div>

          </div>
        </div>
      </article>

      {/* 泡アニメーション */}
      <div className="absolute inset-0 overflow-hidden">
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
              backgroundColor: `rgba(173, 216, 230, ${0.2 + Math.random() * 0.3})`, // 淡い水色透明泡
              boxShadow: `0 0 10px rgba(173, 216, 230, 0.3)`, // 柔らかい発光感
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
      `}</style>
    </section>
  )
}
