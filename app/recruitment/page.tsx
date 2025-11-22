import ForContact from '@/components/ForContact'
import Image from 'next/image'
import React from 'react'
import Carousel from './compnents/Carousel'
import Mission from '@/components/Mission'

export default function Recruitment() {
  return (
    <section className='container  w-full  space-y-20'>
      <article className='w-full  relative py-18 text-gray-700'>
        <div className='w-1/2 ml-auto '>
          <Image
            alt='リクルート画像'
            width={300}
            height={150}
            src="/school.png"
            className="h-full w-full object-cover" />
          <h2 className='text-9xl  absolute top-[50%] left-[10%]'>RECRUIT</h2>
          <h2 className='text-4xl  absolute top-70%] left-[10%]'>最高のチームで誰もが自由にもっとシンプルな社会をつくる」</h2>
        </div>
      </article>
      <article className='text-1xl text-center w-1/2 mx-auto text-gray-700'>
        <p>
          KANOA GROUPでは裁量権を持って事業を推し進めていける方を募集しております。<br></br>
          リーダーとしてチームを引っ張っていきたい方、エンジニアを目指している方、上昇志向のある学生、新規事業の企画開発に興味のある方はぜひお問い合わせください。
        </p>

      </article>

      <article className='my-[20%] space-y-2'>
        <h2 className='text-center text-gray-700 text-2xl'>カノアがあなたに約束する事</h2>
        <small className='block text-center text-gray-700'>Add life to life.</small>
        <div className=' flex justify-center items-center' style={{ height: '600px', position: 'relative' }}>

          <Carousel
            baseWidth={400}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </article>

      <article className='my-[20%] space-y-2'>
        <h2 className='text-center text-gray-700 text-2xl'>あなたは何になりたいですか？！</h2>
        <div className=' w-full grid grid-cols-4 gap-2 text-center p-10'>
          <div className='border aspect-square flex items-center justify-center'>
            総合職・秘書・運転手
          </div>
          <div className='border aspect-square flex items-center justify-center'>
            Webエンジニア
          </div>
          <div className='border aspect-square flex items-center justify-center'>
            動画クリエイター
          </div>
          <div className='border aspect-square flex items-center justify-center'>
            Webデザイナー
          </div>
          <div className='border aspect-square flex items-center justify-center'>
            SNS管理チーム
          </div>
          <div className='border aspect-square flex items-center justify-center'>
            宅内自宅ファイバー設定係
          </div>
          <div className='border aspect-square flex items-center justify-center'>
            セールスマネージャー
          </div>
          <div className='border aspect-square flex items-center justify-center'>
            セールスレップ
          </div>
        </div>
      </article>
      <Mission />
      <ForContact />
    </section>
  )
}
