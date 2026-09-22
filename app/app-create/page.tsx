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
  title: "アプリ開発",
  description:
    "大阪のKANOA GROUPが、業務効率化から新規サービスまで完全オリジナルのアプリ・システムを開発。自社アプリ「GK-U」で培ったUI/UX設計のノウハウを活かし、要件定義から運用まで一貫してサポートします。",
  alternates: {
    canonical: "https://kanoa-group.com/app-create",
  },
  openGraph: {
    title: "アプリ開発｜KANOAグループ",
    description:
      "業務効率化から新規サービスまで、完全オリジナルのアプリ・システムを設計から開発、運用まで一貫してサポートします。",
    url: "https://kanoa-group.com/app-create",
    siteName: "KANOA GROUP",
    locale: "ja_JP",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "アプリ開発",
  "description":
    "クライアントの課題や目的に合わせた、完全オリジナルのアプリ・システム開発サービス。",
  "url": "https://kanoa-group.com/app-create",
  "provider": {
    "@type": "Organization",
    "@id": "https://kanoa-group.com/#organization",
    "name": "KANOA GROUP",
    "url": "https://kanoa-group.com",
  },
  "areaServed": { "@type": "Place", "name": "日本" },
  "inLanguage": "ja",
};

const steps = [
  {
    id: 1,
    title: "ヒアリング & 要件定義",
    description: "解決したい課題、必要な機能、想定ユーザーなどを丁寧にヒアリングします。",
    icon: <Monitor size={28} />,
    href: "/contact",
  },
  {
    id: 2,
    title: "設計 & プロトタイプ",
    description: "画面構成・機能仕様をまとめたプロトタイプを制作し、認識をすり合わせます。",
    icon: <Layout size={28} />,
    href: "/contact",
  },
  {
    id: 3,
    title: "実装 & テスト",
    description: "設計に基づき開発を進め、動作確認・品質チェックを経てリリース準備を行います。",
    icon: <Code size={28} />,
    href: "/contact",
  },
  {
    id: 4,
    title: "リリース & 運用サポート",
    description: "公開後の機能追加や改善も、継続的にサポートいたします。",
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
