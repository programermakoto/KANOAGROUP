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
    "KANOA GROUPの事業一覧。WEB制作（ホームページ制作・LP/ECサイト制作・アプリ開発）、IT教育（社会人向け教育アプリ・未来塾）、通信インフラ（営業代行・宅内光ファイバー開通業務・電気通信工事・ライフライン切替案内）の3領域で事業を展開しています。",
  alternates: {
    canonical: "https://kanoa-group.com/service",
  },
  openGraph: {
    title: "事業一覧｜KANOAグループ",
    description:
      "WEB制作・IT教育・通信インフラの3領域で、KANOA GROUPが展開する全事業をご紹介します。",
    url: "https://kanoa-group.com/service",
    siteName: "KANOA GROUP",
    locale: "ja_JP",
    type: "website",
  },
};

const organizationRef = {
  "@type": "Organization",
  "@id": "https://kanoa-group.com/#organization",
  "name": "KANOA GROUP",
  "url": "https://kanoa-group.com",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "url": "https://kanoa-group.com/service",
  "inLanguage": "ja",
  "itemListElement": [
    { "name": "ホームページ制作", "category": "WEB制作", "description": "最短1週間で高クオリティなWebサイトを制作するHP-CREATE事業" },
    { "name": "LP・ECサイト制作", "category": "WEB制作", "description": "集客・販売に特化したランディングページ／ECサイト制作" },
    { "name": "アプリ開発", "category": "WEB制作", "description": "クライアント仕様に合わせたオーダーメイドのアプリ・システム開発" },
    { "name": "社会人向け教育アプリ", "category": "IT教育", "description": "GK-Uオンラインスクール。Web/SNSマーケティング・プログラミング・デザインなどを学べるオンラインスクール" },
    { "name": "未来塾", "category": "IT教育", "description": "プログラミング・マーケティング・デザインなどを学べる教育スクール" },
    { "name": "営業代行", "category": "通信インフラ", "description": "営業を外注できる営業会社" },
    { "name": "宅内光ファイバー開通業務", "category": "通信インフラ", "description": "宅内Wi-Fi設定業務を3次受けで担う個人事業主を募集" },
    { "name": "電気通信工事", "category": "通信インフラ", "description": "光回線・LAN配線など通信設備工事を3次受けで担う個人事業主を募集" },
    { "name": "ライフライン切替案内", "category": "通信インフラ", "description": "ガス・電気・Wi-Fiなど生活インフラの乗り換えご案内" },
    { "name": "Cloud Pocket", "description": "個人事業主・新規事業向けの起業支援プラットフォーム" },
  ].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: item.name,
      ...(item.category ? { category: item.category } : {}),
      description: item.description,
      provider: organizationRef,
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