import type { Metadata } from "next";
import AgencyClient from "./AgencyClient";

export const metadata: Metadata = {
  title: "Cloud Pocket｜スマホでできるクラウドワーク",
  description:
    "KANOA GROUPが運営するCloud Pocketは、スマホ1台で始められる代理店・クラウドワークサービス。初期リスクを抑えてスキマ時間で収入を得られる新しい働き方を提供します。",
  alternates: {
    canonical: "https://kanoa-group.com/agency",
  },
  openGraph: {
    title: "Cloud Pocket｜スマホ副業｜KANOAグループ",
    description:
      "スマホだけでできるクラウドワーク。スキマ時間で収入を得られるKANOA GROUPのCloud Pocket。",
    url: "https://kanoa-group.com/agency",
    siteName: "KANOA GROUP",
    locale: "ja_JP",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cloud Pocket",
  "description":
    "個人事業主や新規事業を立ち上げる企業向けに、最先端のサービス提供や協業支援を行う起業支援プラットフォーム。",
  "url": "https://kanoa-group.com/agency",
  "provider": {
    "@type": "Organization",
    "@id": "https://kanoa-group.com/#organization",
    "name": "KANOA GROUP",
    "url": "https://kanoa-group.com",
  },
  "areaServed": { "@type": "Place", "name": "日本" },
  "inLanguage": "ja",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgencyClient />
    </>
  );
}