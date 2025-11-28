import ForContact from '@/components/ForContact'
import Image from 'next/image'
import React from 'react'
import Carousel from './components/Carousel'
import Mission from '@/components/Mission'

export default function Recruitment() {
  return (
    <section className='container w-full space-y-20'>

      {/* ヘッダー画像＋重ねテキスト（PCは完全にそのまま、SPは縦並びで中央寄せ） */}
      <article className='w-full relative py-10 text-gray-700'>
        {/* SP: w-full & center, PC: w-1/2 ml-auto (元のPC見た目を md: で再現) */}
        <div className='w-full md:w-1/2 md:ml-auto flex flex-col md:block items-center md:items-stretch'>
          <div className='w-full relative'>
            <Image
              alt='リクルート画像'
              width={1200}
              height={600}
              src="/school.png"
              className="w-full h-auto object-cover"
            />
            {/* 以下 2つは md:（PC）でのみ表示するのでPCには影響なし */}
            <h2 className='hidden md:block text-9xl absolute top-[50%] left-[-90%] transform -translate-y-1/2'>
              RECRUIT
            </h2>
            <h2 className='hidden md:block text-4xl absolute left-[-90%] top-[100%]'>
              「最高のチームで誰もが自由にもっとシンプルな社会をつくる」
            </h2>
          </div>

          {/* SPでは画像下にテキストを縦並びで表示（PCは hidden） */}
          <div className='block md:hidden w-full text-center mt-4 px-4'>
            <h2 className='text-4xl font-bold'>RECRUIT</h2>
            <p className='mt-3 text-base'>
              「最高のチームで誰もが自由にもっと<br className="sm:hidden"></br>シンプルな社会をつくる」
            </p>
          </div>
        </div>
      </article>

      {/* 説明文（SPは中央寄せ、PCは従来どおり） */}
      <article className='text-xl text-center md:text-left w-full md:w-1/2 mx-auto text-gray-700 px-4'>
        <p className='text-xs md:leading-relaxed'>
          KANOA GROUPでは裁量権を<br className="sm:hidden"></br>
          持って事業を推し進めていける方を<br className="sm:hidden"></br>
          募集しております。<br />
          リーダーとしてチームを引っ張っていきたい方、エンジニアを目指している方、上昇志向のある学生、新規事業の企画開発に興味のある方は<br className="sm:hidden"></br>ぜひお問い合わせください。
        </p>
      </article>

      {/* カルーセル（PCはそのまま。SPは横幅に収まるよう wrapper をレスポンシブ化） */}
      <article className='my-[20%] space-y-2 px-4'>
        <h2 className='text-center text-gray-700 text-2xl'>カノアがあなたに約束する事</h2>
        <small className='block text-center text-gray-700'>Add life to life.</small>

        <div className='flex justify-center items-center'>
          {/* wrapper: SP は左右余白を確保して中央に、PC は max-w で既存見た目を維持 */}
          <div className='w-full max-w-[1200px] h-auto md:h-[600px]'>
            <Carousel
              baseWidth={300} /* PC に影響しないよう既定値のまま。必要なら responsive 対応できます */
              autoplay={true}
              autoplayDelay={7000}
              pauseOnHover={true}
              loop={false}
              round={false}
            />
          </div>
        </div>
      </article>

      {/* 職種グリッド：SPは1列→見やすく、SMは2列、PCは4列（PCは従来通り） */}
      <article className='my-[20%] space-y-2 px-4'>
        <h2 className='text-center text-gray-700 text-xl md:text-2xl'>あなたは何になりたいですか？！</h2>
        <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center p-2 md:p-4'>
          <div className='text-sm md:text-xl border aspect-square flex items-center justify-center p-4'>総合職<br className="sm:hidden"></br>・秘書<br className="sm:hidden"></br>・運転手</div>
          <div className='text-sm md:text-xl border aspect-square flex items-center justify-center p-4'>Webエンジニア</div>
          <div className='text-sm md:text-xl border aspect-square flex items-center justify-center p-4'>動画<br className="sm:hidden"></br>クリエイター</div>
          <div className='text-sm md:text-xl border aspect-square flex items-center justify-center p-4'>Webデザイナー</div>
          <div className='text-sm md:text-xl border aspect-square flex items-center justify-center p-4'>SNS管理チーム</div>
          <div className='text-sm md:text-xl border aspect-square flex items-center justify-center p-4'>宅内自宅<br className="sm:hidden"></br>ファイバー設定係</div>
          <div className='text-sm md:text-xl border aspect-square flex items-center justify-center p-4'>セールス<br className="sm:hidden"></br>マネージャー</div>
          <div className='text-sm md:text-xl border aspect-square flex items-center justify-center p-4'>セールスレップ</div>
        </div>
      </article>

      <Mission />
      <ForContact />
    </section>
  )
}
