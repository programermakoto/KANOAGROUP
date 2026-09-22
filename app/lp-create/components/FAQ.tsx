import React from "react";

const faqs = [
  {
    q: "LPとホームページの違いは何ですか？",
    a: "LPは1ページで完結し、商品・サービスへのお申し込みや購入など一つの行動に絞って設計するページです。複数ページに情報を整理したい場合はホームページ制作をご案内しています。",
  },
  {
    q: "ECサイトの決済方法は選べますか？",
    a: "クレジットカード決済など主要な決済方法に対応可能です。ご希望の決済方法をお問い合わせ時にお知らせください。",
  },
  {
    q: "制作期間はどれくらいですか？",
    a: "LPは最短1週間、EC機能を含む場合は商品点数や機能により変動します。まずはお気軽にご相談ください。",
  },
  {
    q: "公開後に商品を追加できますか？",
    a: "はい。修正フォームから商品追加やページ内容の変更をご依頼いただけます。",
  },
  {
    q: "保守費用はかかりますか？",
    a: "月額料金に基本的な保守・簡易修正を含んでいます。詳細はプランをご確認ください。",
  },
];

export default function FAQ() {
  return (
    <section className="container mx-auto px-6 py-12" id="faq">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">よくある質問（F&amp;Q）</h2>
      <dl className="max-w-3xl mx-auto space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="border rounded-lg p-4 bg-white">
            <dt className="font-semibold text-gray-800">Q. {f.q}</dt>
            <dd className="mt-2 text-sm text-gray-600">A. {f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
