import type { Metadata } from "next";
import AgencyClient from "./AgencyClient";

export const metadata: Metadata = {
  title: "Cloud Pocket | スマホでできるクラウドワーク",
  description:
    "Cloud Pocketはスマホ1台で始められるクラウドワークサービス。スキマ時間で収入を得られる新しい働き方。",
  alternates: {
    canonical: "https://kanoa-group.com/agency",
  },
  openGraph: {
    title: "Cloud Pocket | スマホ副業",
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

export default function Page() {
  return <AgencyClient />;
}