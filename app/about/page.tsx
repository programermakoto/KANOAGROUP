import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "会社概要 | KANOA GROUP",
  description:
    "KANOA GROUPの会社概要。大阪を拠点にWeb制作・アプリ開発・人材事業・オンラインスクールなど複数事業を展開しています。",
  alternates: {
    canonical: "https://kanoa-group.com/about",
  },
  openGraph: {
    title: "会社概要 | KANOA GROUP",
    description:
      "KANOA GROUPの会社概要。Web制作・アプリ開発・人材事業などを展開。",
    url: "https://kanoa-group.com/about",
    siteName: "KANOA GROUP",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Page() {
  return <AboutClient />;
}