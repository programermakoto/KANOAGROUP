import React from 'react'

export default function ValueProps() {
  const items = [
    {
      small: "コンバージョン設計",
      title: "CONVERSION DESIGN",
      desc: "商品・サービスの魅力を最短で伝え、問い合わせや購入につながる導線を設計。ファーストビューからCTAまで、迷わせない構成でつくります。",
    },
    {
      small: "集客対応",
      title: "MARKETING READY",
      desc: "SEO・広告運用・SNS連携を前提にしたページ構成で、集客した見込み客をそのまま成果につなげます。",
    },
    {
      small: "EC機能対応",
      title: "EC READY",
      desc: "決済・カート機能が必要なECサイトにも対応。商品点数や運用に合わせて、必要な機能だけをシンプルに実装します。",
    },
  ];

  return (
    <section className='my-20 px-4 md:px-20'>
      <h2 className='my-10 text-center font-bold text-3xl'>LP・ECサイトに求められる3つの力</h2>

      {items.map((item, idx) => (
        <article
          key={idx}
          className={`flex flex-col md:flex-row items-center justify-around text-gray-700 my-12
            ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
        >
          <div className='flex-1'></div>
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
