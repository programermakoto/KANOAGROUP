import React from 'react'

export default function InfoWebCreate() {
  const items = [
    {
      small: "デザイン性",
      title: "OUR DESIGN",
      desc: "飛び出る3Dサイトやアニメーションを加えたデザインをスマホ、パソコン両方に対応しています。",
    },
    {
      small: "集客に強い",
      title: "MARKETING",
      desc: "弊社のマーケティングチームがSEOやMEOに強いホームページを制作。制作したサイトを弊社のSNSに投稿や広告やこのHPで拡散可能",
    },
    {
      small: "費用対効果",
      title: "COST EFFECTIVE",
      desc: "初期製作費に数十万、毎月保守に数万円、細かい修正なのに毎回請求書が…おめでとうございます。もう心配ありません。初期費用も、細かな毎月の修正も全てコミコミ。",
    },
  ];

  return (
    <section className='my-20 px-4 md:px-20'>
      <h2 className='my-10 text-center font-bold text-3xl'>あなたの不安解消します</h2>

      {items.map((item, idx) => (
        <article
          key={idx}
          className={`flex flex-col md:flex-row items-center justify-around text-gray-700 my-12
            ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
        >
          <div className='flex-1'></div> {/* 空白スペース */}
          <div className='flex-1 max-w-md text-center md:text-left'>
            <small className='block text-gray-500 mb-2'>{item.small}</small>
            <h3 className='font-bold text-3xl mb-4'>{item.title}</h3>
            <p className='text-sm md:text-base'>{item.desc}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
