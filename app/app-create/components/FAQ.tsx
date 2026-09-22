import React from "react";

const faqs = [
  {
    q: "どんなアプリ・システムを開発できますか？",
    a: "業務効率化ツール、予約・管理システム、会員制サービス、EC連携システムなど、目的に応じて幅広く対応しています。",
  },
  {
    q: "開発期間はどれくらいですか？",
    a: "機能の規模により異なりますが、シンプルなものであれば1〜2ヶ月、複雑な機能を含む場合は数ヶ月程度が目安です。まずはご相談ください。",
  },
  {
    q: "リリース後のサポートはありますか？",
    a: "はい。運用開始後の不具合対応や機能追加、保守サポートにも対応しています。",
  },
  {
    q: "既存システムとの連携は可能ですか？",
    a: "はい。APIや外部サービスとの連携にも対応可能です。",
  },
  {
    q: "開発費用はどれくらいかかりますか？",
    a: "機能や規模によって大きく異なります。まずは要件をお聞かせいただき、お見積りいたします。",
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
