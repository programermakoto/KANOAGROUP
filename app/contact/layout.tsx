import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "KANOA GROUPへのお問い合わせはこちら。Web制作・アプリ開発・インフラ事業・営業代行など、ご相談内容に応じて担当者よりご連絡いたします。",
  alternates: {
    canonical: "https://kanoa-group.com/contact",
  },
  openGraph: {
    title: "お問い合わせ｜KANOAグループ",
    description:
      "KANOA GROUPへのお問い合わせはこちら。ご相談内容に応じて担当者よりご連絡いたします。",
    url: "https://kanoa-group.com/contact",
    siteName: "KANOA GROUP",
    locale: "ja_JP",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
