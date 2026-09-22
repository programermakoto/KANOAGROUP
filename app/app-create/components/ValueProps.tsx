import React from 'react'

export default function ValueProps() {
  const items = [
    {
      small: "オーダーメイド設計",
      title: "CUSTOM BUILT",
      desc: "業務フローや目的に合わせて、既製品にはない完全オリジナルのアプリ・システムを設計します。",
    },
    {
      small: "UI/UX品質",
      title: "UI/UX DESIGN",
      desc: "自社開発アプリ「GK-U」で培ったUI/UX設計・機能開発のノウハウを活かし、使いやすさにこだわったプロダクトを提供します。",
    },
    {
      small: "スピード開発",
      title: "AGILE DELIVERY",
      desc: "要件定義から実装・テストまで一貫した体制で、業務効率化から顧客体験向上まで幅広くスピーディーに対応します。",
    },
  ];

  return (
    <section className='my-20 px-4 md:px-20'>
      <h2 className='my-10 text-center font-bold text-3xl'>アプリ開発で大切にしていること</h2>

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
