import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "光回線代理店事業",
  description:
    "KANOA GROUPの光回線代理店事業。高速・安定・安心の通信インフラを、法人・個人のお客様へ大阪を拠点に提供しています。導入から設定サポートまで一貫対応。",
  alternates: {
    canonical: "https://kanoa-group.com/optical-fiber",
  },
  openGraph: {
    title: "光回線代理店事業｜KANOAグループ",
    description:
      "高速・安定・安心の通信インフラを、法人・個人のお客様へ大阪を拠点に提供。導入から設定サポートまで一貫対応。",
    url: "https://kanoa-group.com/optical-fiber",
    siteName: "KANOA GROUP",
    locale: "ja_JP",
    type: "website",
  },
};

export default function OpticalFiberLayout({ children }: { children: React.ReactNode }) {
  return children;
}
