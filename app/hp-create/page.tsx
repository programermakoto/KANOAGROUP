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
  title: "大阪のホームページ制作 0円？!| KANOA GROUP",
  description:
    "大阪で企業向けホームページ制作ならKANOA GROUP。Web制作・SEO対策・デザイン・集客までワンストップ対応。",
  alternates: {
    canonical: "https://kanoa-group.com/web-create",
  },
  openGraph: {
    title: "大阪のホームページ制作 | KANOA GROUP",
    description:
      "大阪で企業向けホームページ制作ならKANOA GROUP。SEO対策・デザイン・集客まで対応。",
    url: "https://kanoa-group.com/web-create",
    siteName: "KANOA GROUP",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Page() {
  return (
    <section className="container">
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