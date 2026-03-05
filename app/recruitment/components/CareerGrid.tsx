"use client";
import { useState } from "react";

export default function CareerGrid() {
  const items = [
    {
      title: "総合職・秘書・運転手",
      description: "スケジュール管理、電話対応、営業、公式LINE&メール対応、事業統括",
      img: "/model-4.webp",
      salary: "月給25万円～",
      days: "週5日",  
      age: "25～35歳",
      sideJob: "可",
    },
    {
      title: "エンジニア",
      description: "フロントエンド開発、バックエンド開発、データベース設計、セキュリティ対策",
      img: "/model-2.webp",
      salary: "月給25万円～",
      days: "週5日",
      age: "20～40歳",
      sideJob: "可",
    },
    {
      title: "動画クリエイター",
      description: "動画制作、編集、配信、広告運用、撮影",
      img: "/model-7.webp",
      salary: "月給10万円～",
      days: "週4～5日",
      age: "20～35歳",
      sideJob: "可",
    },
    {
      title: "Webデザイナー",
      description: "Webサイトデザイン、デザインガイドライン作成、デザインチェック、デザイン修正",
      img: "/model-3.webp",
      salary: "月給10万円～",
      days: "週4～5日",
      age: "20～35歳",
      sideJob: "可",
    },
    {
      title: "SNS管理チーム",
      description: "SNS運用、ブログ制作、SNS運用、コメント対応",
      img: "/model-6.webp",
      salary: "完全歩合制",
      days: "週1日〜",
      age: "20～50歳",
      sideJob: "可",
    },
    {
      title: "宅内自宅ファイバー設定係",
      description: "宅内自宅ファイバー設定、宅内自宅ファイバー設定チェック、宅内自宅ファイバー設定修正",
      img: "/eo-image.webp",
      salary: "月給24万円～70万",
      days: "週5日",
      age: "20～40歳",
      sideJob: "可",
    },
    {
      title: "セールスマネージャー",
      description: "事業統括、電話対応、営業、公式LINE&メール対応",
      img: "/model-1.webp",
      salary: "月給25万円～",
      days: "週5日",
      age: "25～40歳",
      sideJob: "可",
    },
    {
      title: "委託業務",
      description: "アクセサリ販売、人材紹介、プログラミングスクール集客、プログラミング講師、オンラインスクールGK-UP教材制作",
      img: "/model-5.webp",
      salary: "歩合制",
      days: "未定",
      age: "20～60歳",
      sideJob: "可",
    },
    // 他の項目も同様に追加
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <article className='my-[20%] space-y-2 px-4'>
      <h2 className='text-center text-gray-700 text-xl md:text-2xl'>あなたは何になりたいですか？！</h2>
      <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center p-2 md:p-4'>
        {items.map((item, index) => (
          <div key={index} className='relative'>
            <div
              className='text-sm md:text-xl border aspect-square text-white font-bold flex items-center justify-center p-4 bg-cover bg-center transition-all duration-1000 ease-in-out cursor-pointer'
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => setActiveIndex(index)}
            >
              {item.title.split("・").map((line, i) => (
                <span key={i}>
                  {line}
                  <br className="sm:hidden" />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* モーダル */}
      {activeIndex !== null && (
       <div className='fixed inset-0 z-50 bg-[rgba(65,61,61,0.65)] flex justify-center items-center p-4'>
       <div className='bg-white rounded-lg max-w-md w-full p-6 relative'>
         <button
           className='absolute top-4 right-4 text-gray-600 text-xl font-bold'
           onClick={() => setActiveIndex(null)}
         >
           ×
         </button>
         <h3 className='text-xl font-bold mb-4'>{items[activeIndex].title}</h3>
         <ul className='space-y-2 text-gray-700'>
           <li><strong>お給料:</strong> {items[activeIndex].salary}</li>
           <li><strong>仕事内容:</strong> {items[activeIndex].description}</li>
           <li><strong>勤務日数:</strong> {items[activeIndex].days}</li>
           <li><strong>年齢:</strong> {items[activeIndex].age}</li>
           <li><strong>副業参加:</strong> {items[activeIndex].sideJob}</li>
         </ul>
       </div>
     </div>
     
      )}
    </article>
  );
}
