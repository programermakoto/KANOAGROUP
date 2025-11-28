"use client";

import React, { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

interface Category {
  id: string;
  title: string;
  faqs: FAQ[];
}

// ここに最新のFAQデータをそのまま組み込む
const data: Category[] = [
  {
    id: 'eo',
    title: '宅内光ファイバー開通業務',
    faqs: [
      { q: '委託業務として働くことは可能ですか？', a: 'はい。週4日以上稼働できる方であれば可能です。' },
      { q: '正社員として募集はありますか？', a: 'あります。車とパソコンを支給し、年齢は問いません。' },
      { q: '勤務時間は決まっていますか？', a: '完全フレックス制で自由に働けます。' },
      { q: '直接依頼することはできますか？', a: 'いいえ。EO光からの仕事のみ対応しています。' },
      { q: 'サービス内容は何ですか？', a: 'お客様宅で光ファイバー開通に伴うWi-Fi設定や通信環境の最適化を行います。' },
      { q: '初めてでも対応可能ですか？', a: 'はい。丁寧にサポートしますので安心です。' },
    ],
  },
  {
    id: 'mirai-juku',
    title: '未来塾',
    faqs: [
      { q: '初心者でも学べますか？', a: '大歓迎です。基礎から実践まで丁寧にサポートします。' },
      { q: '学習期間はどのくらいですか？', a: '目安は3〜6ヶ月ですが、自分のペースで学べます。' },
      { q: 'オンラインで受講できますか？', a: 'はい。WebMTGによるオンライン授業を提供しています。' },
      { q: '個別面談は可能ですか？', a: 'はい。1対1でメンターと面談できます。' },
      { q: 'どんなスキルが身につきますか？', a: 'プログラミング、マーケティング、デザイン、動画編集など幅広く学べます。' },
      { q: '年齢制限はありますか？', a: '特にありません。学生から社会人まで幅広く受講可能です。' },
    ],
  },
  {
    id: 'hp-create',
    title: 'HP-CREATE',
    faqs: [
      { q: '制作の納期はどれくらいですか？', a: 'トップページ＋下層数ページで最短1週間〜4週間が目安です。' },
      { q: '保守やSEO対応は含まれますか？', a: 'プランによって異なります。保守プランは別途契約可能です。' },
      { q: '料金はいくらくらいですか？', a: '規模やデザインによります。お見積もりをご依頼ください。' },
      { q: 'デザイン修正は可能ですか？', a: 'はい。納品前に修正可能です。納品後の修正も別途対応可能です。' },
      { q: 'スマホ対応は可能ですか？', a: 'はい。レスポンシブデザインで制作します。' },
      { q: 'CMS導入はできますか？', a: 'WordPress等のCMS導入も対応可能です。' },
    ],
  },
  {
    id: 'system-dev',
    title: 'システムアプリ開発事業',
    faqs: [
      { q: 'オーダーメイド開発は可能ですか？', a: 'はい。完全オリジナルでクライアント仕様に合わせて開発します。' },
      { q: '納品後のサポートはありますか？', a: 'はい。操作マニュアル・保守サポートを提供可能です。' },
      { q: '開発費用の目安は？', a: '規模や仕様によって異なります。まずはお問い合わせください。' },
      { q: '開発期間はどれくらいですか？', a: '数週間〜数か月。仕様により変動します。' },
      { q: '既存サービスとの連携は可能ですか？', a: 'はい。APIや外部サービスとの連携にも対応可能です。' },
    ],
  },
  {
    id: 'gku',
    title: 'GK-Uオンラインスクール',
    faqs: [
      { q: 'どんなスキルが学べますか？', a: 'Web/SNSマーケティング・プログラミング・デザイン・財務・AI・資産運用など幅広く学べます。' },
      { q: '法人向け利用は可能ですか？', a: '可能です。管理者用ダッシュボードや利用レポートの提供も行えます。' },
      { q: '学習の進め方は？', a: '動画講義・クイズ・実践ワーク・メンター相談などを組み合わせて学習します。' },
      { q: '受講料はどれくらいですか？', a: '月額サブスク形式で学べます。詳細はお問い合わせください。' },
      { q: 'サポートはありますか？', a: 'はい。メンターによる質問対応やフィードバックがあります。' },
    ],
  },
];

export default function FAQByBusiness() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>(data[0].id);

  const toggle = (catId: string, idx: number) => {
    const key = `${catId}-${idx}`;
    setOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="container mx-auto px-6 py-12" id="faq">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">よくある質問（F&Q）</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar: categories */}
        <nav className="w-full md:w-1/4 bg-white rounded p-4 shadow-sm">
          <ul className="space-y-2">
            {data.map(cat => (
              <li key={cat.id}>
                <button
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left py-2 px-3 rounded transition-colors duration-150 ${
                    activeCategory === cat.id ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content: selected category */}
        <div className="w-full md:w-3/4 bg-white rounded p-6 shadow-sm">
          {data
            .filter(cat => cat.id === activeCategory)
            .map(cat => (
              <div key={cat.id}>
                <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
                <dl className="space-y-4" aria-live="polite">
                  {cat.faqs.map((f, i) => {
                    const key = `${cat.id}-${i}`;
                    return (
                      <div key={key} className="border rounded overflow-hidden">
                        <dt>
                          <button
                            onClick={() => toggle(cat.id, i)}
                            className="w-full flex items-center justify-between p-4 text-left"
                            aria-expanded={Boolean(open[key])}
                          >
                            <span className="font-medium">{f.q}</span>
                            <span className="ml-4">{open[key] ? '-' : '+'}</span>
                          </button>
                        </dt>
                        <dd
                          className={`${
                            open[key] ? 'max-h-96 py-4' : 'max-h-0'
                          } px-4 transition-all duration-300 overflow-hidden text-sm text-gray-700`}
                        >
                          {f.a}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
