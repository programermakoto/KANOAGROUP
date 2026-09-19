import type { Metadata } from "next";
import AgencyClient from "./AgencyClient";

export const metadata: Metadata = {
  title: "Cloud Pocket｜スマホでできるクラウドワーク",
  description:
    "Cloud Pocketはスマホ1台で始められるクラウドワークサービス。スキマ時間で収入を得られる新しい働き方。",
  alternates: {
    canonical: "https://kanoa-group.com/agency",
  },
  openGraph: {
    title: "Cloud Pocket｜スマホ副業｜KANOAグループ",
    description:
      "スマホだけでできるクラウドワーク。スキマ時間で収入を得られるCloud Pocket。",
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
  "provider": { "@id": "https://kanoa-group.com/#organization" },
  "areaServed": { "@type": "Place", "name": "日本" },
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