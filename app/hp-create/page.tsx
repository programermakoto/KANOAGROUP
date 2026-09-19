import type { Metadata } from "next";
import React from "react";
import TopWrapper from "./components/TopWrapper";
import MainWrapper from "./components/MainWrapper";
import PortfolioGrid from "./components/PortfolioGrid";
import WebsiteFourStep from "./components/WebsiteFourStep";
import InfoWebCreate from "./components/InfoWebCreate";
import PricingPlans from "./components/PricingPlans";
import FAQByBusiness from "@/components/FAQByBusiness";

/* SEO */
export const metadata: Metadata = {
  title: "大阪のホームページ制作 0円？!",
  description:
    "大阪で企業向けホームページ制作ならKANOA GROUP。Web制作・SEO対策・デザイン・集客までワンストップ対応。",
  alternates: {
    canonical: "https://kanoa-group.com/hp-create",
  },
  openGraph: {
    title: "大阪のホームページ制作｜KANOAグループ",
    description:
      "大阪で企業向けホームページ制作ならKANOA GROUP。SEO対策・デザイン・集客まで対応。",
    url: "https://kanoa-group.com/hp-create",
    siteName: "KANOA GROUP",
    locale: "ja_JP",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ホームページ制作（HP-CREATE）",
  "description":
    "初期費用0円、月額15,000円からのホームページ制作サービス。最短1週間で高クオリティなWebサイトを提供。",
  "url": "https://kanoa-group.com/hp-create",
  "provider": { "@id": "https://kanoa-group.com/#organization" },
  "areaServed": { "@type": "Place", "name": "大阪府" },
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

export default function Page() {
  return (
    <section className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopWrapper />
      <MainWrapper />
      <WebsiteFourStep />
      <PortfolioGrid />
      <InfoWebCreate />
      <PricingPlans />
      <FAQByBusiness />
    </section>
  );
}