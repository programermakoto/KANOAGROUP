import type { Metadata } from "next";
import React from "react";
import { Monitor, Layout, Code, Rocket } from "lucide-react";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import WebsiteFourStep from "../hp-create/components/WebsiteFourStep";

/* SEO */
export const metadata: Metadata = {
  title: "LP・ECサイト制作",
  description:
    "大阪のKANOA GROUPが、成果につながるランディングページ（LP）・ECサイトを制作。集客からコンバージョンまでを意識した設計で、決済・カート機能にも対応します。",
  alternates: {
    canonical: "https://kanoa-group.com/lp-create",
  },
  openGraph: {
    title: "LP・ECサイト制作｜KANOAグループ",
    description:
      "成果につながるランディングページ・ECサイトを制作。集客からコンバージョンまでを意識した設計で、決済・カート機能にも対応します。",
    url: "https://kanoa-group.com/lp-create",
    siteName: "KANOA GROUP",
    locale: "ja_JP",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LP・ECサイト制作",
  "description":
    "集客・販売に特化したランディングページ／ECサイトの制作サービス。決済・カート機能の実装にも対応。",
  "url": "https://kanoa-group.com/lp-create",
  "provider": {
    "@type": "Organization",
    "@id": "https://kanoa-group.com/#organization",
    "name": "KANOA GROUP",
    "url": "https://kanoa-group.com",
  },
  "areaServed": { "@type": "Place", "name": "大阪府" },
  "inLanguage": "ja",
  "offers": {
    "@type": "Offer",
    "price": "15000",
    "priceCurrency": "JPY",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "15000",
      "priceCurrency": "JPY",
      "unitText": "MONTH",
    },
  },
};

const steps = [
  {
    id: 1,
    title: "ヒアリング & 要件定義",
    description: "掲載したい商品・サービス内容、必要な決済方法、デザインの好みなどを簡単にヒアリングします。",
    icon: <Monitor size={28} />,
    href: "/contact",
  },
  {
    id: 2,
    title: "ワイヤー・デザイン",
    description: "構成案とデザインの第一案を3営業日ほどで制作し、修正依頼フォームと共にお送りします。",
    icon: <Layout size={28} />,
    href: "/contact",
  },
  {
    id: 3,
    title: "実装 & テスト",
    description: "EC機能が必要な場合はカート・決済の動作確認まで行い、修正内容確認後1〜3営業日程度で完成します。",
    icon: <Code size={28} />,
    href: "/contact",
  },
  {
    id: 4,
    title: "公開 & 運用",
    description: "公開後の商品追加や文章修正も、修正フォームからシンプルに依頼可能です。",
    icon: <Rocket size={28} />,
    href: "/contact",
  },
];

export default function Page() {
  return (
    <section className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ValueProps />
      <WebsiteFourStep steps={steps} linkLabel="お問い合わせで詳細確認" />
      <Pricing />
      <FAQ />
    </section>
  );
}
