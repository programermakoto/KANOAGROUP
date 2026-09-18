import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "株式会社KANOA　GROUP",
    template: "%s｜KANOAグループ",
  },
  description:
    "株式会社KANOA GROUPは2024年7月22日に創業されたIT事業、インフラ事業、営業代行を運営するグループ会社です",
  openGraph: {
    title: "株式会社KANOA　GROUP",
    description:
      "株式会社KANOA GROUPは2024年7月22日に創業されたIT事業、インフラ事業、営業代行を運営するグループ会社です",
    url: "https://kanoa-group.com",
    siteName: "KANOA GROUP",
    images: [
      {
        url: "https://kanoa-group.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://kanoa-group.com",
  },
  icons: {
    icon: "/kanoa-logo.PNG",
    apple: "/kanoa-logo.PNG",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社KANOA　GROUP",
    description:
      "株式会社KANOA GROUPは2024年7月22日に創業されたIT事業、インフラ事業、営業代行を運営するグループ会社です",
    images: ["https://kanoa-group.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kanoa-group.com/#organization",
        "name": "KANOA GROUP",
        "url": "https://kanoa-group.com",
        "logo": "https://kanoa-group.com/kanoa-logo.PNG",
        "description":
          "株式会社KANOA GROUPは2024年7月22日に創業されたIT事業、インフラ事業、営業代行を運営するグループ会社です",
      },
      {
        "@type": "WebSite",
        "@id": "https://kanoa-group.com/#website",
        "url": "https://kanoa-group.com",
        "name": "KANOA GROUP",
        "publisher": { "@id": "https://kanoa-group.com/#organization" },
        "inLanguage": "ja",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://kanoa-group.com/#local",
        "name": "KANOA GROUP",
        "image": "https://kanoa-group.com/kanoa-logo.PNG",
        "url": "https://kanoa-group.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "大阪市",
          "addressRegion": "大阪府",
          "addressCountry": "JP"
        },
        "areaServed": {
          "@type": "Place",
          "name": "日本"
        }
      },
      {
        "@type": "Service",
        "name": "Web制作",
        "description": "大阪で企業向けホームページ制作を常時受付。",
        "areaServed": { "@type": "Place", "name": "大阪府" },
        "provider": { "@id": "https://kanoa-group.com/#organization" },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "name": "アプリ開発",
        "description": "業務効率化や新規事業向けアプリ開発を受託。",
        "areaServed": { "@type": "Place", "name": "日本" },
        "provider": { "@id": "https://kanoa-group.com/#organization" },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "name": "光回線代理店事業",
        "description": "個人・法人向け光ファイバー回線を代理店として常時販売。",
        "areaServed": { "@type": "Place", "name": "日本" },
        "provider": { "@id": "https://kanoa-group.com/#organization" },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "name": "営業代行事業",
        "description": "営業代行を受託するサービスです",
        "areaServed": { "@type": "Place", "name": "大阪府" },
        "provider": { "@id": "https://kanoa-group.com/#organization" },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <html lang="ja">
      <head>
        <meta
          name="google-site-verification"
          content="kVAsQ8yYYOMQncvuhuXeSYj7XUKvgUhVwo4bf3Z_nzk"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh`}
      >
        <IntroOverlay src="/leaf.mp4" durationMs={4000} />
        <Header />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}