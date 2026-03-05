import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const services = [
    
    { href: '/service/web', label: 'Web制作' },
    { href: '/service/app', label: 'アプリ開発' },
    { href: '/service/online-school', label: 'GK-Uオンラインスクール' },
    { href: '/service/optical', label: '宅内光ファイバー開通業務' },
    { href: '/service/logistics', label: '軽貨物事業' },
    { href: '/service/hr', label: '人材紹介' },
   
  ];

  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 grid md:grid-cols-4 gap-6">
        {/* 規約・ポリシー */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-gray-800 border-b pb-2">規約事項 (POLICY)</h3>
          <Link href="/privacy" className="text-sm text-gray-600 hover:underline">個人情報規約 (Privacy & Term)</Link>
          <Link href="/about" className="text-sm text-gray-600 hover:underline">特商法の記載 (Company info)</Link>
          <Link href="/recruitment" className="text-sm text-gray-600 hover:underline">採用情報 (Recruit)</Link>
        </div>

        {/* お問い合わせ */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-gray-800 border-b pb-2">お問い合わせ (CONTACT)</h3>
          <Link href="/contact" className="text-sm text-gray-600 hover:underline">お問い合わせフォーム</Link>
          <Link href="https://lin.ee/N8Z79Gm" className="text-sm text-gray-600 hover:underline">専属担当へのLINE問い合わせ</Link>
          <Link href="tel:050-8887-2035" className="text-sm text-gray-600 hover:underline">TEL: 050-8887-2035</Link>
          <hr />
          <Link href="https://lin.ee/N8Z79Gm" className="text-sm text-gray-600 hover:underline">KANOA GROUP 公式Instagram</Link>
          <Link href="https://lin.ee/N8Z79Gm" className="text-sm text-gray-600 hover:underline">KANOA GROUP 公式LINE</Link>
          <Link href="https://lin.ee/N8Z79Gm" className="text-sm text-gray-600 hover:underline">GK-U 公式Instagram</Link>
        </div>

        {/* 事業内容・サービス */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-gray-800 border-b pb-2">事業内容 (SERVICES)</h3>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="text-sm text-gray-600 hover:underline">{s.label}</Link>
          ))}
        </div>

        {/* 関連会社 */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-gray-800 border-b pb-2">関連会社 (COMPANY)</h3>
          <Link href="https://master-key.co.jp/" className="text-sm text-gray-600 hover:underline">MASTER key株式会社</Link>
          <Link href="https://www.daikou-dbb.com/magazine.html" className="text-sm text-gray-600 hover:underline">有限会社 大光製本所</Link>
          <Link href="https://on-cloud.jp/" className="text-sm text-gray-600 hover:underline">合同会社ON CROUD</Link>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-6">
        © KANOA GROUP Corporation. All rights reserved.
      </div>
    </footer>
  );
}