import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Title をページごとに差し替え可能なテンプレートに
export const metadata: Metadata = {
  title: {
    default: "KANOA GROUP｜ホームページ制作・システム開発",
    template: "%s | KANOA GROUP",
  },
  description:
    "IT会社であるKANOA GROUPは「これは面白い!を創り ∴ 自由を広げる。」をミッションに、ホームページ制作・システム開発で新規ビジネスを支援します。",
  keywords: [
    "寺内誠将",
    "ホームページ制作",
    "システム開発",
    "アプリ開発",
    "KANOA GROUP",
    "大阪",
    "Web制作",
    "IT企業",
    "3D面白いサイト",
  ],
  openGraph: {
    title: "KANOA GROUP｜ホームページ制作・システム開発",
    description:
      "KANOA GROUP — ホームページ制作・システム開発で新規ビジネスを支援します。",
    url: "https://kanoa-group.com",
    siteName: "KANOA GROUP",
    images: [{ url: "https://kanoa-group.com/kanoa-logo.PNG", width: 1200, height: 630 }],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1 },
  },
  alternates: {
    canonical: "https://kanoa-group.com",
    languages: { ja: "/", en: "/en" },
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }, { rel: 'icon', url: '/kanoa-logo.PNG', sizes: '192x192' }],
    
  },
  // Next.js の Metadata 型は twitter プロパティを受け付けます
  // `metadata` を使うと自動で head に入るので便利
  twitter: {
    card: "summary_large_image",
    title: "KANOA GROUP|ホームページ制作・システム開発",
    description:
      "KANOA GROUP — ホームページ制作・システム開発で新規ビジネスを支援します。",
    images: ["https://kanoa-group.com/kanoa-logo.PNG"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // JSON-LD（構造化データ）
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kanoa-group.com/#organization",
        "name": "KANOA GROUP",
        "url": "https://kanoa-group.com",
        "logo": "https://kanoa-group.com/kanoa-logo.PNG",
        // "sameAs": ["https://twitter.com/your", "https://www.facebook.com/your"], // SNSあれば追加
        "description": "ホームページ制作・システム開発で新規ビジネスを支援するIT会社。",
      },
      {
        "@type": "WebSite",
        "@id": "https://kanoa-group.com/#website",
        "url": "https://kanoa-group.com",
        "name": "KANOA GROUP",
        "publisher": { "@id": "https://kanoa-group.com/#organization" },
        "inLanguage": "ja"
      }
    ]
  };

  return (
    <html lang="ja">
      <head>
        {/* google site verification */}
        <meta name="google-site-verification" content="kVAsQ8yYYOMQncvuhuXeSYj7XUKvgUhVwo4bf3Z_nzk" />

        {/* Additional favicons / manifest */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh font-inter select-none`}>
        <IntroOverlay src="/op.mp4" durationMs={4000} />
        <Header />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
