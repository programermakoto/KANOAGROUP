import type { Metadata } from "next";
import React from "react";
import Hero from "./components/hero";
import Service from "./components/service";
import ForContact from "@/components/ForContact";
import Attachment from "@/components/ui/Attachment";
import Mission from "@/components/Mission";
import Movie from "@/components/ui/movie";

export const metadata: Metadata = {
  title: "事業一覧",
  description:
    "KANOA GROUPの事業一覧。ホームページ制作・システムアプリ開発・インフラ事業（通信回線の営業管理）・営業代行事業・GK-Uオンラインスクール・未来塾など、大阪を拠点にIT領域とスキル不要型ビジネスの両軸で事業を展開しています。",
  alternates: {
    canonical: "https://kanoa-group.com/service",
  },
  openGraph: {
    title: "事業一覧｜KANOAグループ",
    description:
      "ホームページ制作・システムアプリ開発・インフラ事業・営業代行・GK-Uオンラインスクールなど、KANOA GROUPが展開する全事業をご紹介します。",
    url: "https://kanoa-group.com/service",
    siteName: "KANOA GROUP",
    locale: "ja_JP",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "url": "https://kanoa-group.com/service",
  "itemListElement": [
    { "name": "インフラ事業", "description": "光回線をはじめとした通信インフラの営業・管理業務" },
    { "name": "宅内光ファイバー開通業務", "description": "EO光のWi-Fi訪問設定サポート" },
    { "name": "未来塾", "description": "プログラミング・マーケティング・デザインなどを学べる教育スクール" },
    { "name": "HP-CREATE", "description": "ホームページ制作事業" },
    { "name": "システムアプリ開発事業", "description": "オーダーメイドのアプリ・システム開発" },
    { "name": "GK-Uオンラインスクール", "description": "Web/SNSマーケティング・プログラミング・デザインなどを学べるオンラインスクール" },
    { "name": "営業代行事業", "description": "営業を外注できる営業会社" },
    { "name": "Cloud Pocket", "description": "個人事業主・新規事業向けの起業支援プラットフォーム" },
  ].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: item.name,
      description: item.description,
      provider: { "@id": "https://kanoa-group.com/#organization" },
    },
  })),
};

export default function ServicePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Service />
      <Mission />
      <ForContact />
    </div>
  );
}